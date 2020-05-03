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

## usersテーブル

｜Coulumn|Type|Options|
|--------|----|-------|
|username|string|null: false, unique: true|
|email|string|null: false, unique: true|
|password|string|null: false|

### Association

- has_many :groups, through: :users_groups
- belongs_to :message

## groupsテーブル

｜Coulumn|Type|Options|
|--------|----|-------|
|group_name|string|null: false, unique: true|

### Association

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