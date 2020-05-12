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
  img_src VARCHAR(255)[]
);

INSERT INTO hostTable (name) VALUES ('host1');
INSERT INTO hostTable (name) VALUES ('host2');
INSERT INTO hostTable (name) VALUES ('host3');

INSERT INTO roomTable (host_id, location, rating, room_type, bed_num, description, price_per_night, img_src) VALUES (1, 'Nasvhille, TN', 4.45, 'Building', 6, 'A residential bloc in downtown Nashville', 60, '{https://loremflickr.com/333/222/building?random=1, https://loremflickr.com/333/222/building?random=2, https://loremflickr.com/333/222/building?random=3, https://loremflickr.com/333/222/building?random=4}');
INSERT INTO roomTable (host_id, location, rating, room_type, bed_num, description, price_per_night, img_src) VALUES (2, 'Nashville, TN', 4.72, 'Refurbished church', 3, 'An exquisit stay in the house of the lord', 122, '{https://loremflickr.com/333/222/building?random=5, https://loremflickr.com/333/222/building?random=6, https://loremflickr.com/333/222/building?random=7}');
INSERT INTO roomTable (host_id, location, rating, room_type, bed_num, description, price_per_night, img_src) VALUES (3, 'Nashville, TN', 4.13, 'Fully renovated church', 24, 'Enough room for you and all your friends!', 135, '{https://loremflickr.com/333/222/building?random=8, https://loremflickr.com/333/222/building?random=9, https://loremflickr.com/333/222/building?random=10, https://loremflickr.com/333/222/building?random=11}');


--the following are repeats of above!

-- INSERT INTO roomTable
--   (host_id, location, rating, room_type, bed_num, description, price_per_night, img_src)
-- VALUES
--   (1, 'Nasvhille, TN', 4.87, 'Apartment', 3, *TITLE, 120, '{}');

-- INSERT INTO roomTable
--   (host_id, location, rating, room_type, bed_num, description, price_per_night, img_src)
-- VALUES
--   (2, 'Nasvhille, TN', 4.79, 'Townhouse', 4, *TITLE, 87, '{}');

-- INSERT INTO roomTable
--   (host_id, location, rating, room_type, bed_num, description, price_per_night, img_src)
-- VALUES
--   (3, 'Nasvhille, TN', 4.32, 'Room', 2, *TITLE, 95, '{}');

-- INSERT INTO roomTable
--   (host_id, location, rating, room_type, bed_num, description, price_per_night, img_src)
-- VALUES
--   (1, 'Nasvhille, TN', 4.68, 'Guesthouse', 5, *TITLE, 100, '{}');

-- INSERT INTO roomTable
--   (host_id, location, rating, room_type, bed_num, description, price_per_night, img_src)
-- VALUES
--   (2, 'Nasvhille, TN', 4.81, 'Guest Suite', 3, *TITLE, 77, '{}');

-- INSERT INTO roomTable
--   (host_id, location, rating, room_type, bed_num, description, price_per_night, img_src)
-- VALUES
--   (3, 'Nasvhille, TN', 4.55, 'House', 4, *TITLE, 88, '{}');

-- INSERT INTO roomTable
--   (host_id, location, rating, room_type, bed_num, description, price_per_night, img_src)
-- VALUES
--   (1, 'Nasvhille, TN', 4.87, 'Apartment', 3, *TITLE, 120, '{}');
