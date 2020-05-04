# DB設計 

## usersテーブル

｜Coulumn|Type|Options|
|--------|----|-------|
|username|string|null: false, unique: true|
|email|string|null: false, unique: true|
|password|string|null: false|
|password confirmation|string|null: false|

### Association

- has_many :users_groups 
- has_many :groups, through: :users_groups
- belongs_to :message

## groupsテーブル

｜Coulumn|Type|Options|
|--------|----|-------|
|group_name|string|null: false, unique: true|

### Association

- has_many :users_groups
- has_many :users, though: :users_groups
- belongs_to :message

## users_groupsテーブル

｜Coulumn|Type|Options|
|--------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association 

- belongs_to :groups
- belongs_to :users

## messageテーブル

｜Coulumn|Type|Options|
|--------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
|body|text|null: false|
|image|string|

### Association

- has_many :users
- has_many :groups