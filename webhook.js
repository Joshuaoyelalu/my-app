


fake_users = [
    { "name": "User 1", "id": "user1", "city": "San Francisco", "state": "CA" },
    { "name": "User 2", "id": "user2", "city": "New York", "state": "NY" },
    { "name": "User 3", "id": "user3", "city": "Chicago", "state": "IL" }, 
    { "name": "User 3", "id": "user3", "city": "Chicago", "state": "IL" }, 
    { "name": "User 4", "id": "user4", "city": "Los Angeles", "state": "CA" },
]
If,
len(fake_users) == 0:fake_users = [
    { "name": "User 1", "id": "user1", "city": "LAGOS", "state": "LA" },