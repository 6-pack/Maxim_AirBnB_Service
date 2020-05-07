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

INSERT INTO roomTable (host_id, location, rating, room_type, bed_num, description, price_per_night, img_src) VALUES (1, 'Nasvhille, TN', 4.4, 'Mansion', 6, 'A frat boys dream come true.', 60, '{https://loremflickr.com/cache/resized/65535_49794168986_1e749bbbd9_320_240_nofilter.jpg}');
INSERT INTO roomTable (host_id, location, rating, room_type, bed_num, description, price_per_night, img_src) VALUES (1, 'Nashville, TN', 4.7, 'Towers', 24, 'Another frat boys dream come true.', 25, '{https://loremflickr.com/cache/resized/65535_49661753357_b6329f521f_320_240_nofilter.jpg}');
INSERT INTO roomTable (host_id, location, rating, room_type, bed_num, description, price_per_night, img_src) VALUES (2, 'Nashville, TN', 4.1, 'Brandscomb', 320, 'A grimey Vanderbilt experience.', 35, '{https://loremflickr.com/cache/resized/65535_49792393086_a117e3bc38_320_240_nofilter.jpg}');
INSERT INTO roomTable (host_id, location, rating, room_type, bed_num, description, price_per_night, img_src) VALUES (1, 'Nasvhille, TN', 4.4, 'Mansion', 6, 'A frat boys dream come true.', 60, '{https://loremflickr.com/cache/resized/65535_49794168986_1e749bbbd9_320_240_nofilter.jpg}');
INSERT INTO roomTable (host_id, location, rating, room_type, bed_num, description, price_per_night, img_src) VALUES (1, 'Nashville, TN', 4.7, 'Towers', 24, 'Another frat boys dream come true.', 25, '{https://loremflickr.com/cache/resized/65535_49661753357_b6329f521f_320_240_nofilter.jpg}');
INSERT INTO roomTable (host_id, location, rating, room_type, bed_num, description, price_per_night, img_src) VALUES (2, 'Nashville, TN', 4.1, 'Brandscomb', 320, 'A grimey Vanderbilt experience.', 35, '{https://loremflickr.com/cache/resized/65535_49792393086_a117e3bc38_320_240_nofilter.jpg}');
INSERT INTO roomTable (host_id, location, rating, room_type, bed_num, description, price_per_night, img_src) VALUES (1, 'Nasvhille, TN', 4.4, 'Mansion', 6, 'A frat boys dream come true.', 60, '{https://loremflickr.com/cache/resized/65535_49794168986_1e749bbbd9_320_240_nofilter.jpg}');
INSERT INTO roomTable (host_id, location, rating, room_type, bed_num, description, price_per_night, img_src) VALUES (1, 'Nashville, TN', 4.7, 'Towers', 24, 'Another frat boys dream come true.', 25, '{https://loremflickr.com/cache/resized/65535_49661753357_b6329f521f_320_240_nofilter.jpg}');
INSERT INTO roomTable (host_id, location, rating, room_type, bed_num, description, price_per_night, img_src) VALUES (2, 'Nashville, TN', 4.1, 'Brandscomb', 320, 'A grimey Vanderbilt experience.', 35, '{https://loremflickr.com/cache/resized/65535_49792393086_a117e3bc38_320_240_nofilter.jpg}');
INSERT INTO roomTable (host_id, location, rating, room_type, bed_num, description, price_per_night, img_src) VALUES (1, 'Nasvhille, TN', 4.4, 'Mansion', 6, 'A frat boys dream come true.', 60, '{https://loremflickr.com/cache/resized/65535_49794168986_1e749bbbd9_320_240_nofilter.jpg}');
INSERT INTO roomTable (host_id, location, rating, room_type, bed_num, description, price_per_night, img_src) VALUES (1, 'Nashville, TN', 4.7, 'Towers', 24, 'Another frat boys dream come true.', 25, '{https://loremflickr.com/cache/resized/65535_49661753357_b6329f521f_320_240_nofilter.jpg}');
INSERT INTO roomTable (host_id, location, rating, room_type, bed_num, description, price_per_night, img_src) VALUES (2, 'Nashville, TN', 4.1, 'Brandscomb', 320, 'A grimey Vanderbilt experience.', 35, '{https://loremflickr.com/cache/resized/65535_49792393086_a117e3bc38_320_240_nofilter.jpg}');

--caution. Images up to this point do not have proper photo renderings. More like joke setups...