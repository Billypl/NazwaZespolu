DB_HOST="admin-mysql_db"
DB_USER="root"
DB_PASSWORD="student"
DB_NAME="BE_188898"

CHARACTER_SET="utf8mb4"
COLLATE="utf8mb4_unicode_ci"
DB_DUMP="dump.sql"

PARAMETERS_FILE="/var/www/html/app/config/parameters.php"
NEW_DOMAIN="localhost:18889"

function call_mysql_command() {
    local MYSQL_COMMAND="$1"
    local DOCKER_COMMAND=$(cat <<EOF
mysql -h "$DB_HOST" -u"$DB_USER" -p"$DB_PASSWORD" "$DB_NAME" -e "$MYSQL_COMMAND"
EOF
)
    eval "$DOCKER_COMMAND"
}

echo "Checking MySQL connection..."
if call_mysql_command "use $DB_NAME"; then
    echo "Database $DB_NAME exists. Dropping it..."
    call_mysql_command "DROP DATABASE $DB_NAME";
else
    echo "Database $DB_NAME does not exist."
fi

echo "Creating database $DB_NAME..."
mysql -h "$DB_HOST" -u"$DB_USER" -p"$DB_PASSWORD" -e "CREATE DATABASE $DB_NAME CHARACTER SET $CHARACTER_SET COLLATE $COLLATE";

echo "Adjusting collation"
sed -i 's/utf8mb4_uca1400_ai_ci/utf8mb4_unicode_ci/g' $DB_DUMP
sed -i 's/utf8mb3_uca1400_ai_ci/utf8mb3_unicode_ci/g' $DB_DUMP

echo "Importing database from $DB_DUMP..."
if [ -f "$DB_DUMP" ]; then
    mysql -h "$DB_HOST" -P 3306 -u "$DB_USER" -p"$DB_PASSWORD" "$DB_NAME" < "$DB_DUMP" || echo "Import failed!"
else
    echo "SQL file $DB_DUMP not found!"
fi

echo "Updating domain to $NEW_DOMAIN in database..."
call_mysql_command "
USE $DB_NAME;
UPDATE ps_configuration SET value='$NEW_DOMAIN' WHERE name IN ('PS_SHOP_DOMAIN', 'PS_SHOP_DOMAIN_SSL');
UPDATE ps_shop_url SET domain='$NEW_DOMAIN', domain_ssl='$NEW_DOMAIN';
"

if [ -f "$PARAMETERS_FILE" ]; then
    echo "Updating $PARAMETERS_FILE with new database configuration..."
    sed -i "s/'database_name'.*=>.*/'database_name' => '$DB_NAME',/" "$PARAMETERS_FILE"
    sed -i "s/'database_host'.*=>.*/'database_host' => '$DB_HOST',/" "$PARAMETERS_FILE"
    sed -i "s/'database_user'.*=>.*/'database_user' => '$DB_USER',/" "$PARAMETERS_FILE"
    sed -i "s/'database_password'.*=>.*/'database_password' => '$DB_PASSWORD',/" "$PARAMETERS_FILE"
    rm -rf /var/www/html/var/cache/*
else
    echo "File $PARAMETERS_FILE not found. Skipping configuration update."
fi

# echo "Disabling Friendly URL..."
# mysql -h "$DB_HOST" -P 3306 -u "$DB_USER" -p"$DB_PASSWORD" -e "
# USE $DB_NAME;
# UPDATE ps_configuration SET value=0 WHERE name='PS_REWRITING_SETTINGS';
# "

exit 0

echo "Starting Apache server..."
exec apache2-foreground