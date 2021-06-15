-- Seed data with a fake user for testing

BEGIN TRANSACTION;

INSERT into users (name, email, entries, joined) values ('jessie', 'jessie@gmail.com', 5, '2021-03-05 14:19:08.978');
INSERT into login (hash, email) values ('$2a$10$uknT7i3LXILfyynlFhj67uCH8kDjL8.PKbWCIQG0hZWcBuRgVr9VS', 'jessie@gmail.com');

insert into users (name, email, entries, joined) values ('a', 'a@a.com', 5, '2018-01-01');
insert into login (hash, email) values ('$2a$10$WAK21U0LWl7C//jJ.DOB2uPP1DJQh7KUDgasdyQeGzkop2Pzl8W7u', 'a@a.com');

COMMIT;