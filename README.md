# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

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
- has_many :messages

## groupsテーブル

｜Coulumn|Type|Options|
|--------|----|-------|
|group_name|string|null: false, unique: true|

### Association

- has_many :users_groups
- has_many :users, though: :users_groups
- has_many :messages

## users_groupsテーブル

｜Coulumn|Type|Options|
|--------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association 

- belongs_to :group
- belongs_to :user

## messageテーブル

｜Coulumn|Type|Options|
|--------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
|body|text|null: false|
|image|string|

### Association

- belong_to :user
- belong_to :group