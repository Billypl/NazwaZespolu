# General
- for each feature create separate branch - no commiting directly to master / dev
- you can freerly create sub branches (e.g. feature/f1 -> feature/f1.1)
- flow: `feature -> dev (merge request) -> master (merged by maintainer)` 
- merge request only with working features (no broken features will be merged)
- before commiting remember about creating database [backup](README.md#database-backup-and-restoration)

### Branch names format:  
`type/feature_name`, e.g.:  
```
feature/selenium_tests
feature/email_support
fix/front_page_products_ui
fix/long_products_initialization
docs/general_readme
docs/project_requirements
```
### Commits
`PROJECT_ACRONYM: ONE_WORD_COMMIT_SUMMARY(TYPE) - commit description`, e.g.:
```
NZ: ui(feat) - add nav bar
NZ: docs(fix) - add 'how to run' section to README.md
```