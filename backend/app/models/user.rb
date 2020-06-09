class User < ApplicationRecord
    has_many(:notifications)
    has_secure_password()
    validates :username, :presence => true, :uniqueness => true
end
