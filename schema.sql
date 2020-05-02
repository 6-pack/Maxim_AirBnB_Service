DROP DATABASE IF EXISTS airbnb_mhyml;

CREATE DATABASE airbnb_mhyml;

\c airbnb_mhyml;

CREATE TABLE hostTable (
  host_id SERIAL PRIMARY KEY,
  name VARCHAR(100)
);

CREATE TABLE roomTable (
  room_id SERIAL PRIMARY KEY,
  host_id INTEGER REFERENCES hostTable(host_id),
  location VARCHAR(100),
  rating REAL,
  room_type VARCHAR(200),
  bed_num INTEGER,
  description VARCHAR(255),
  price_per_night INTEGER,
  img_src VARCHAR(255)
);

CREATE TABLE imgTable (
  img_id SERIAL PRIMARY KEY,
  room_id INTEGER REFERENCES roomTable(room_id),
  img_src VARCHAR(255)
);

INSERT INTO hostTable (name) VALUES ('host1');
INSERT INTO hostTable (name) VALUES ('host2');

INSERT INTO roomTable (host_id, location, rating, room_type, bed_num, description, price_per_night) VALUES (1, 'Nasvhille, TN', 4.4, 'Mansion', 6, 'A frat boys dream come true.', 60);
INSERT INTO roomTable (host_id, location, rating, room_type, bed_num, description, price_per_night) VALUES (1, 'Nashville, TN', 4.7, 'Towers', 24, 'Another frat boys dream come true.', 25);

INSERT INTO imgTable (room_id, img_src) VALUES (1, 'src_url_1');
INSERT INTO imgTable (room_id, img_src) VALUES (1, 'src_url_2');
INSERT INTO imgTable (room_id, img_src) VALUES (2, 'src_url_3');
INSERT INTO imgTable (room_id, img_src) VALUES (2, 'src_url_4');