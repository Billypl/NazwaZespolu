# Setup SSL tutorial
Code for SSL generation:
```bash
openssl genrsa -aes256 -passout pass:password -out server.pass.key 4096
openssl rsa -passin pass:password -in server.pass.key -out server.key
rm server.pass.key
# csr for actuall CA signing - not used right now
openssl req -new -key server.key -out server.csr \
-subj "/C=PL/ST=Pomerania/L=Gdansk/O=Test/OU=Test/CN=localhost"
openssl x509 -req -sha256 -days 365 -in server.csr -signkey server.key -out server.crt
rm server.csr
```

Changes in docker-compose:

```yaml
volume:
  - ./apache-config/000-default.conf:/etc/apache2/sites-available/000-default.conf
  - ./apache-config/ssl:/etc/ssl/certs
```
```yaml
ports:
  - 8443:443
```
```yaml
command: /bin/bash -c "a2enmod ssl && apache2-foreground"
```


Changes required in admin panel:
```
KONFIGURUJ -> Preferencje -> Ruch -> Ustaw URL sklepu -> Domena sklepu = localhost:8443 
KONFIGURUJ -> Preferencje -> Ruch -> Ustaw URL sklepu -> Domena SSL = localhost:8443

KONFIGURUJ -> Preferencje -> Ogólny -> Włącz SSL -> TAK (Zapisz)
KONFIGURUJ -> Preferencje -> Ogólny -> Włącz protokół SSL na wszystkich stronach -> TAK (Zapisz)
```