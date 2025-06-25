// Music data
const musicTracks = [
    // Hindi Music
    { id: '1', title: 'Aaj Ki Raat', artist: 'Shubham', album: 'Hindi Hits', duration: '3:45', path: 'Music/Hindi/Aaj Ki Raat.mp3', category: 'Hindi', coverArt: 'https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { id: '2', title: 'Aaj Phir', artist: 'Shubham', album: 'Hindi Hits', duration: '4:12', path: 'Music/Hindi/Aaj Phir.mp3', category: 'Hindi', coverArt: 'thumbnails/5000000.jpg'},
    { id: '3', title: 'Aayi Nai', artist: 'Shubham', album: 'Hindi Hits', duration: '3:28', path: 'Music/Hindi/Aayi Nai.mp3', category: 'Hindi', coverArt: 'https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { id: '4', title: 'Apna Bana Le', artist: 'Shubham', album: 'Hindi Hits', duration: '4:01', path: 'Music/Hindi/Apna_Bana_Le.mp3', category: 'Hindi', coverArt: 'https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { id: '5', title: 'Baarish Ban Jaana', artist: 'Shubham', album: 'Hindi Hits', duration: '3:55', path: 'Music/Hindi/Baarish Ban Jaana.mp3', category: 'Hindi', coverArt: 'https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { id: '6', title: 'Baby Girl', artist: 'Shubham', album: 'Hindi Hits', duration: '3:33', path: 'Music/Hindi/Baby Girl.mp3', category: 'Hindi', coverArt: 'https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { id: '7', title: 'Bachpan Ka Pyaar', artist: 'Shubham', album: 'Hindi Hits', duration: '2:58', path: 'Music/Hindi/Bachpan Ka Pyaar.mp3', category: 'Hindi', coverArt: 'https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { id: '8', title: 'Buzz', artist: 'Shubham', album: 'Hindi Hits', duration: '3:22', path: 'Music/Hindi/Buzz.mp3', category: 'Hindi', coverArt: 'https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { id: '9', title: 'De Taali', artist: 'Shubham', album: 'Hindi Hits', duration: '4:15', path: 'Music/Hindi/De Taali.mp3', category: 'Hindi', coverArt: 'https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { id: '10', title: 'Dekhte Dekhte', artist: 'Shubham', album: 'Hindi Hits', duration: '4:28', path: 'Music/Hindi/Dekhte Dekhte.mp3', category: 'Hindi', coverArt: 'https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { id: '11', title: 'Dheere Dheer', artist: 'Shubham', album: 'Hindi Hits', duration: '3:47', path: 'Music/Hindi/Dheere Dheer.mp3', category: 'Hindi', coverArt: 'https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { id: '12', title: 'Dil Mein Chhupa Loonga', artist: 'Shubham', album: 'Hindi Hits', duration: '3:52', path: 'Music/Hindi/Dil Mein Chhupa Loonga.mp3', category: 'Hindi', coverArt: 'https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { id: '13', title: 'Dosti', artist: 'Shubham', album: 'Hindi Hits', duration: '4:05', path: 'Music/Hindi/Dosti.mp3', category: 'Hindi', coverArt: 'https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { id: '14', title: 'Duniyaa', artist: 'Shubham', album: 'Hindi Hits', duration: '3:41', path: 'Music/Hindi/Duniyaa.mp3', category: 'Hindi', coverArt: 'https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { id: '15', title: 'Garmi', artist: 'Shubham', album: 'Hindi Hits', duration: '3:18', path: 'Music/Hindi/Garmi.mp3', category: 'Hindi', coverArt: 'https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { id: '16', title: 'Genda Phool', artist: 'Shubham', album: 'Hindi Hits', duration: '2:48', path: 'Music/Hindi/Genda Phool.mp3', category: 'Hindi', coverArt: 'https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { id: '17', title: 'Heeriye', artist: 'Shubham', album: 'Hindi Hits', duration: '4:33', path: 'Music/Hindi/Heeriye.mp3', category: 'Hindi', coverArt: 'https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { id: '18', title: 'Hua Main', artist: 'Shubham', album: 'Hindi Hits', duration: '3:26', path: 'Music/Hindi/Hua Main.mp3', category: 'Hindi', coverArt: 'https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { id: '19', title: 'Jaana Samjho Na', artist: 'Shubham', album: 'Hindi Hits', duration: '4:07', path: 'Music/Hindi/Jaana Samjho Na.mp3', category: 'Hindi', coverArt: 'https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { id: '20', title: 'Jai Shri Ram', artist: 'Shubham', album: 'Hindi Hits', duration: '3:15', path: 'Music/Hindi/Jai Shri Ram.mp3', category: 'Hindi', coverArt: 'https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { id: '21', title: 'Janiye', artist: 'Shubham', album: 'Hindi Hits', duration: '3:59', path: 'Music/Hindi/Janiye.mp3', category: 'Hindi', coverArt: 'https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { id: '22', title: 'Jo Tum Mere Ho', artist: 'Shubham', album: 'Hindi Hits', duration: '4:21', path: 'Music/Hindi/Jo Tum Mere Ho.mp3', category: 'Hindi', coverArt: 'https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { id: '23', title: 'Kabhi Jo Baadal Barse', artist: 'Shubham', album: 'Hindi Hits', duration: '4:44', path: 'Music/Hindi/Kabhi Jo Baadal Barse.mp3', category: 'Hindi', coverArt: 'https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { id: '24', title: 'Khairiyat', artist: 'Shubham', album: 'Hindi Hits', duration: '5:12', path: 'Music/Hindi/Khairiyat.mp3', category: 'Hindi', coverArt: 'https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { id: '25', title: 'Laal Peeli Akhiyaan', artist: 'Shubham', album: 'Hindi Hits', duration: '3:38', path: 'Music/Hindi/Laal Peeli Akhiyaan .mp3', category: 'Hindi', coverArt: 'https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { id: '26', title: 'Lut Gaye', artist: 'Shubham', album: 'Hindi Hits', duration: '3:56', path: 'Music/Hindi/Lut Gaye.mp3', category: 'Hindi', coverArt: 'https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { id: '27', title: 'Maan Meri Jaan', artist: 'Shubham', album: 'Hindi Hits', duration: '3:29', path: 'Music/Hindi/Maan Meri Jaan.mp3', category: 'Hindi', coverArt: 'https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { id: '28', title: 'Made In India', artist: 'Shubham', album: 'Hindi Hits', duration: '4:18', path: 'Music/Hindi/Made In India.mp3', category: 'Hindi', coverArt: 'https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { id: '29', title: 'Mehendi Wale Haath', artist: 'Shubham', album: 'Hindi Hits', duration: '4:02', path: 'Music/Hindi/Mehendi Wale Haath.mp3', category: 'Hindi', coverArt: 'https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { id: '30', title: 'Mere Mehboob Mere Sanam', artist: 'Shubham', album: 'Hindi Hits', duration: '4:36', path: 'Music/Hindi/Mere Mehboob Mere Sanam.mp3', category: 'Hindi', coverArt: 'https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { id: '31', title: 'Meri Zindagi Hai Tu', artist: 'Shubham', album: 'Hindi Hits', duration: '4:11', path: 'Music/Hindi/Meri Zindagi Hai Tu.mp3', category: 'Hindi', coverArt: 'https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { id: '32', title: 'Morni', artist: 'Shubham', album: 'Hindi Hits', duration: '3:44', path: 'Music/Hindi/Morni.mp3', category: 'Hindi', coverArt: 'https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { id: '33', title: 'Naacho Naacho', artist: 'Shubham', album: 'Hindi Hits', duration: '4:25', path: 'Music/Hindi/Naacho Naacho.mp3', category: 'Hindi', coverArt: 'https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { id: '34', title: 'Nadaaniyan', artist: 'Shubham', album: 'Hindi Hits', duration: '3:51', path: 'Music/Hindi/Nadaaniyan.mp3', category: 'Hindi', coverArt: 'https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { id: '35', title: 'Paani Paani', artist: 'Shubham', album: 'Hindi Hits', duration: '3:17', path: 'Music/Hindi/Paani Paani.mp3', category: 'Hindi', coverArt: 'https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { id: '36', title: 'Pal', artist: 'Shubham', album: 'Hindi Hits', duration: '4:39', path: 'Music/Hindi/Pal.mp3', category: 'Hindi', coverArt: 'https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { id: '37', title: 'Pehle Bhi Main', artist: 'Shubham', album: 'Hindi Hits', duration: '3:48', path: 'Music/Hindi/Pehle Bhi Main.mp3', category: 'Hindi', coverArt: 'https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { id: '38', title: 'Photo', artist: 'Shubham', album: 'Hindi Hits', duration: '3:24', path: 'Music/Hindi/Photo.mp3', category: 'Hindi', coverArt: 'https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { id: '39', title: 'Raataan Lambiyan', artist: 'Shubham', album: 'Hindi Hits', duration: '4:13', path: 'Music/Hindi/Raataan Lambiyan.mp3', category: 'Hindi', coverArt: 'https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { id: '40', title: 'Ram Siya Ram', artist: 'Shubham', album: 'Hindi Hits', duration: '4:07', path: 'Music/Hindi/Ram Siya Ram.mp3', category: 'Hindi', coverArt: 'https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { id: '41', title: 'Saari Duniya Jalaa Denge', artist: 'Shubham', album: 'Hindi Hits', duration: '3:35', path: 'Music/Hindi/Saari Duniya Jalaa Denge.mp3', category: 'Hindi', coverArt: 'https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { id: '42', title: 'Saiyaan Ji', artist: 'Shubham', album: 'Hindi Hits', duration: '4:22', path: 'Music/Hindi/Saiyaan Ji.mp3', category: 'Hindi', coverArt: 'https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { id: '43', title: 'Satranga', artist: 'Shubham', album: 'Hindi Hits', duration: '4:16', path: 'Music/Hindi/Satranga.mp3', category: 'Hindi', coverArt: 'https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { id: '44', title: 'Soni Soni', artist: 'Shubham', album: 'Hindi Hits', duration: '3:42', path: 'Music/Hindi/Soni Soni.mp3', category: 'Hindi', coverArt: 'https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { id: '45', title: 'Teri Baaton Mein Aisa Uljha Jiya', artist: 'Shubham', album: 'Hindi Hits', duration: '4:58', path: 'Music/Hindi/Teri Baaton Mein Aisa Uljha Jiya.mp3', category: 'Hindi', coverArt: 'https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { id: '46', title: 'Thoda Thoda Pyaar', artist: 'Shubham', album: 'Hindi Hits', duration: '3:31', path: 'Music/Hindi/Thoda Thoda Pyaar.mp3', category: 'Hindi', coverArt: 'https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { id: '47', title: 'Tu Hi Yaar Mera', artist: 'Shubham', album: 'Hindi Hits', duration: '4:45', path: 'Music/Hindi/Tu Hi Yaar Mera.mp3', category: 'Hindi', coverArt: 'https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { id: '48', title: 'Tum Hi Ho', artist: 'Shubham', album: 'Hindi Hits', duration: '4:20', path: 'Music/Hindi/Tum Hi Ho.mp3', category: 'Hindi', coverArt: 'https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { id: '49', title: 'Tum Mere Ho', artist: 'Shubham', album: 'Hindi Hits', duration: '3:54', path: 'Music/Hindi/Tum Mere Ho.mp3', category: 'Hindi', coverArt: 'https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { id: '50', title: 'Tum Se', artist: 'Shubham', album: 'Hindi Hits', duration: '4:08', path: 'Music/Hindi/Tum_Se.mp3', category: 'Hindi', coverArt: 'https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { id: '51', title: 'Wajah Tum Ho', artist: 'Shubham', album: 'Hindi Hits', duration: '4:29', path: 'Music/Hindi/Wajah Tum Ho.mp3', category: 'Hindi', coverArt: 'https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { id: '52', title: 'What Jhumka', artist: 'Shubham', album: 'Hindi Hits', duration: '3:37', path: 'Music/Hindi/What Jhumka.mp3', category: 'Hindi', coverArt: 'https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=300' },
    
    // Bhojpuri Music
    { id: '100', title: 'Arrah_Ke_Othlali', artist: 'Shubham', album: 'Bhojpuri Collection', duration: '4:07', path: 'Music/Bhojpuri/Arrah_Ke_Othlali.mp3', category: 'Bhojpuri', coverArt: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { id: '101', title: 'Neelkamal Singh', artist: 'Shubham', album: 'Bhojpuri Collection', duration: '3:31', path: 'Music/Bhojpuri/Neelkamal Singh.mp3', category: 'Bhojpuri', coverArt: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { id: '102', title: 'Akhiyan Ke Kajra Jhagda Kara Dele Ba', artist: 'Shubham', album: 'Bhojpuri Collection', duration: '3:30', path: 'Music/bhojpuri/Akhiya Ke Kajra Jhagda Kara Dele Ba.mp3', category: 'Bhojpuri', coverArt: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { id: '103', title: 'Ara Me Dobara', artist: 'Shubham', album: 'Bhojpuri Collection', duration: '3:30', path: 'Music/bhojpuri/Ara Me Dobara.mp3', category: 'Bhojpuri', coverArt: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { id: '104', title: 'Bas Kar Pagli', artist: 'Shubham', album: 'Bhojpuri Collection', duration: '3:30', path: 'Music/bhojpuri/Bas Kar Pagli.mp3', category: 'Bhojpuri', coverArt: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { id: '105', title: 'Humk Dulhan Banaal', artist: 'Shubham', album: 'Bhojpuri Collection', duration: '3:30', path: 'Music/bhojpuri/Humk Dulhan Banaal.mp3', category: 'Bhojpuri', coverArt: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { id: '106', title: 'Kamariya Dole', artist: 'Shubham', album: 'Bhojpuri Collection', duration: '3:30', path: 'Music/bhojpuri/Kamariya Dole.mp3', category: 'Bhojpuri', coverArt: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { id: '107', title: 'Lagelu Jahar', artist: 'Shubham', album: 'Bhojpuri Collection', duration: '3:30', path: 'Music/bhojpuri/Lagelu Jahar.mp3', category: 'Bhojpuri', coverArt: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { id: '108', title: 'Maroon Color Sadiya', artist: 'Shubham', album: 'Bhojpuri Collection', duration: '3:30', path: 'Music/bhojpuri/Maroon Color Sadiya.mp3', category: 'Bhojpuri', coverArt: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { id: '109', title: 'Paani Paani', artist: 'Shubham', album: 'Bhojpuri Collection', duration: '3:30', path: 'Music/bhojpuri/Paani Paani.mp3', category: 'Bhojpuri', coverArt: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { id: '110', title: 'Pagli Dekhave Agrabatti', artist: 'Shubham', album: 'Bhojpuri Collection', duration: '3:30', path: 'Music/bhojpuri/Pagli Dekhave Agrabatti.mp3', category: 'Bhojpuri', coverArt: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { id: '111', title: 'Godi Me Leke', artist: 'Shubham', album: 'Bhojpuri Collection', duration: '3:30', path: 'Music/bhojpuri/Godi Me Leke.mp3', category: 'Bhojpuri', coverArt: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { id: '112', title: 'Piyar Farak Wali', artist: 'Shubham', album: 'Bhojpuri Collection', duration: '3:30', path: 'Music/bhojpuri/Piyar Farak Wali.mp3', category: 'Bhojpuri', coverArt: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { id: '113', title: 'Rajaji Ke Dilwa', artist: 'Shubham', album: 'Bhojpuri Collection', duration: '3:30', path: 'Music/bhojpuri/Rajaji Ke Dilwa.mp3', category: 'Bhojpuri', coverArt: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { id: '114', title: 'Tumsa Koi Pyara', artist: 'Shubham', album: 'Bhojpuri Collection', duration: '3:30', path: 'Music/bhojpuri/Tumsa Koi Pyara.mp3', category: 'Bhojpuri', coverArt: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=300' },
    
    // Other Music
    { id: '200', title: 'Other Hit 1', artist: 'Shubham', album: 'Other Collection', duration: '3:58', path: 'Music/Other/sample1.mp3', category: 'Other', coverArt: 'https://images.pexels.com/photos/1540338/pexels-photo-1540338.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { id: '201', title: 'Other Hit 2', artist: 'Shubham', album: 'Other Collection', duration: '4:21', path: 'Music/Other/sample2.mp3', category: 'Other', coverArt: 'https://images.pexels.com/photos/1540338/pexels-photo-1540338.jpeg?auto=compress&cs=tinysrgb&w=300' },
];

// Global variables
let currentTrack = null;
let currentPlaylist = [];
let currentIndex = 0;
let isPlaying = false;
let currentCategory = 'all';
let searchQuery = '';
let audioPlayer = null;

// DOM elements
const app = document.querySelector('.app'); // Get the main app container for sidebar control
const sidebar = document.getElementById('sidebar');
const hamburgerMenu = document.getElementById('hamburgerMenu');
const categoryItems = document.querySelectorAll('.category-item');
const searchInput = document.getElementById('searchInput');
const trackList = document.getElementById('trackList');
const categoryTitle = document.getElementById('categoryTitle');
const categoryDescription = document.getElementById('categoryDescription');
const categoryImage = document.getElementById('categoryImage');
const trackCount = document.getElementById('trackCount');
const playAllBtn = document.getElementById('playAllBtn');
const searchResults = document.getElementById('searchResults');
const searchTitle = document.getElementById('searchTitle');
const noResults = document.getElementById('noResults');

// Player elements (Mini Player)
const musicPlayer = document.getElementById('musicPlayer');
const playPauseBtn = document.getElementById('playPauseBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const currentTrackTitle = document.getElementById('currentTrackTitle');
const currentTrackArtist = document.getElementById('currentTrackArtist');
const currentTrackImage = document.getElementById('currentTrackImage');
const progressBar = document.getElementById('progressBar');
const progressFill = document.getElementById('progressFill');
const progressHandle = document.getElementById('progressHandle');
const currentTime = document.getElementById('currentTime');
const totalTime = document.getElementById('totalTime');
const volumeSlider = document.getElementById('volumeSlider');

// Full-screen Player elements
const fullScreenPlayer = document.getElementById('fullScreenPlayer');
const closeFullScreenPlayerBtn = document.getElementById('closeFullScreenPlayerBtn');
const fullTrackImage = document.getElementById('fullTrackImage');
const fullTrackTitle = document.getElementById('fullTrackTitle');
const fullTrackArtist = document.getElementById('fullTrackArtist');
const fullPlayerAlbum = document.getElementById('fullPlayerAlbum'); // New element for album in full player
const fullProgressBar = document.getElementById('fullProgressBar');
const fullProgressFill = document.getElementById('fullProgressFill');
const fullProgressHandle = document.getElementById('fullProgressHandle');
const fullCurrentTime = document.getElementById('fullCurrentTime');
const fullTotalTime = document.getElementById('fullTotalTime');
const fullPlayPauseBtn = document.getElementById('fullPlayPauseBtn');
const fullPrevBtn = document.getElementById('fullPrevBtn');
const fullNextBtn = document.getElementById('fullNextBtn');
const fullVolumeSlider = document.getElementById('fullVolumeSlider');


// Initialize audio player
audioPlayer = document.getElementById('audioPlayer');

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
});

function initializeApp() {
    updateDisplay();
    updatePlayerDisplay();
}

function setupEventListeners() {
    // Sidebar toggle for mobile
    hamburgerMenu.addEventListener('click', toggleSidebar);

    // Category selection
    categoryItems.forEach(item => {
        item.addEventListener('click', function() {
            const category = this.dataset.category;
            selectCategory(category);
            // Close sidebar if open on mobile after selection
            if (app.classList.contains('sidebar-open')) {
                toggleSidebar();
            }
        });
    });

    // Search functionality
    searchInput.addEventListener('input', function() {
        searchQuery = this.value;
        updateDisplay();
    });

    // Play all button
    playAllBtn.addEventListener('click', playAll);

    // Mini Player controls
    playPauseBtn.addEventListener('click', togglePlayPause);
    prevBtn.addEventListener('click', playPrevious);
    nextBtn.addEventListener('click', playNext);

    // Mini Player Progress bar
    progressBar.addEventListener('click', seekToPosition);

    // Mini Player Volume control
    volumeSlider.addEventListener('input', function() {
        if (audioPlayer) {
            audioPlayer.volume = this.value / 100;
            fullVolumeSlider.value = this.value; // Sync full player volume
        }
    });

    // Full-screen Player functionality
    musicPlayer.addEventListener('click', openFullScreenPlayer);
    closeFullScreenPlayerBtn.addEventListener('click', closeFullScreenPlayer);
    fullPlayPauseBtn.addEventListener('click', togglePlayPause);
    fullPrevBtn.addEventListener('click', playPrevious);
    fullNextBtn.addEventListener('click', playNext);
    fullProgressBar.addEventListener('click', seekToPositionFullScreen);
    fullVolumeSlider.addEventListener('input', function() {
        if (audioPlayer) {
            audioPlayer.volume = this.value / 100;
            volumeSlider.value = this.value; // Sync mini player volume
        }
    });


    // Audio player events
    if (audioPlayer) {
        audioPlayer.addEventListener('loadedmetadata', updateDuration);
        audioPlayer.addEventListener('timeupdate', updateProgress);
        audioPlayer.addEventListener('ended', playNext);
        audioPlayer.addEventListener('error', handleAudioError);
    }
}

function toggleSidebar() {
    app.classList.toggle('sidebar-open');
}

function selectCategory(category) {
    currentCategory = category;
    
    // Update active category
    categoryItems.forEach(item => {
        item.classList.remove('active');
        if (item.dataset.category === category) {
            item.classList.add('active');
        }
    });

    updateDisplay();
}

function updateDisplay() {
    const filteredTracks = getFilteredTracks();
    const categoryInfo = getCategoryInfo();

    // Update category header
    categoryTitle.textContent = categoryInfo.title;
    categoryDescription.textContent = categoryInfo.description;
    categoryImage.src = categoryInfo.coverArt;
    trackCount.textContent = `${filteredTracks.length} songs`;

    // Update search results
    if (searchQuery.trim()) {
        searchResults.classList.remove('hidden');
        searchTitle.textContent = `Search results for "${searchQuery}" (${filteredTracks.length} songs)`;
    } else {
        searchResults.classList.add('hidden');
    }

    // Update track list
    if (filteredTracks.length > 0) {
        renderTrackList(filteredTracks);
        noResults.classList.add('hidden');
    } else {
        trackList.innerHTML = '';
        noResults.classList.remove('hidden');
        noResults.querySelector('p').textContent = searchQuery ? 
            'No songs found matching your search.' : 
            'No songs available in this category.';
    }
}

function getFilteredTracks() {
    let tracks = musicTracks;

    // Filter by category
    if (currentCategory !== 'all') {
        tracks = tracks.filter(track => track.category === currentCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        tracks = tracks.filter(track =>
            track.title.toLowerCase().includes(query) ||
            track.artist.toLowerCase().includes(query) ||
            track.album.toLowerCase().includes(query)
        );
    }

    return tracks;
}

function getCategoryInfo() {
    switch (currentCategory) {
        case 'Hindi':
            return {
                title: 'Hindi Music',
                description: 'The best collection of Hindi songs from Shubham Song',
                coverArt: 'https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=500'
            };
        case 'Bhojpuri':
            return {
                title: 'Bhojpuri Music',
                description: 'Traditional and modern Bhojpuri hits',
                coverArt: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=500'
            };
        case 'Other':
            return {
                title: 'Other Music',
                description: 'Diverse collection of music from various genres',
                coverArt: 'https://images.pexels.com/photos/1540338/pexels-photo-1540338.jpeg?auto=compress&cs=tinysrgb&w=500'
            };
        default:
            return {
                title: 'All Music',
                description: 'Complete collection of all your favorite songs',
                coverArt: 'https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=500'
            };
    }
}

function renderTrackList(tracks) {
    trackList.innerHTML = '';
    
    tracks.forEach((track, index) => {
        const trackItem = document.createElement('div');
        trackItem.className = `track-item ${currentTrack && currentTrack.id === track.id ? 'playing' : ''}`;
        trackItem.dataset.id = track.id; // Add data-id attribute
        
        trackItem.innerHTML = `
            <div class="track-number">
                <span class="track-number-text">${index + 1}</span>
                <i class="fas ${currentTrack && currentTrack.id === track.id && isPlaying ? 'fa-pause' : 'fa-play'} play-icon"></i>
            </div>
            <div class="track-info">
                <img src="${track.coverArt}" alt="${track.title}" class="track-cover">
                <div class="track-details">
                    <div class="track-title">${track.title}</div>
                    <div class="track-artist">${track.artist}</div>
                </div>
            </div>
            <div class="track-album">${track.album}</div>
            <div class="track-duration-container">
                <div class="track-actions">
                    <i class="fas fa-heart"></i>
                    <i class="fas fa-ellipsis-h"></i>
                </div>
                <div class="track-duration">${track.duration}</div>
            </div>
        `;

        trackItem.addEventListener('click', () => playTrack(track, tracks));
        trackList.appendChild(trackItem);
    });
}

function playTrack(track, playlist = []) {
    currentTrack = track;
    currentPlaylist = playlist.length > 0 ? playlist : getFilteredTracks();
    currentIndex = currentPlaylist.findIndex(t => t.id === track.id);

    if (audioPlayer) {
        audioPlayer.src = track.path;
        audioPlayer.load();
        
        // For demo purposes, we'll simulate playback since actual files may not exist
        audioPlayer.addEventListener('canplay', function() {
            audioPlayer.play().catch(error => {
                console.log('Playback failed:', error);
                // Simulate playback for demo
                simulatePlayback();
            });
        }, { once: true });

        audioPlayer.addEventListener('error', function() {
            console.log('Audio file not found, simulating playback');
            simulatePlayback();
        }, { once: true });
    }

    isPlaying = true;
    updatePlayerDisplay();
    updateTrackListDisplay();
}

function simulatePlayback() {
    // Simulate audio playback for demo purposes
    isPlaying = true;
    updatePlayerDisplay();
    
    // Simulate progress
    let simulatedTime = 0;
    const duration = parseDuration(currentTrack.duration);
    
    // Clear any existing simulation interval
    if (window.simulatedPlaybackInterval) {
        clearInterval(window.simulatedPlaybackInterval);
    }

    window.simulatedPlaybackInterval = setInterval(() => {
        if (!isPlaying) {
            clearInterval(window.simulatedPlaybackInterval);
            return;
        }
        
        simulatedTime += 1;
        updateSimulatedProgress(simulatedTime, duration);
        
        if (simulatedTime >= duration) {
            clearInterval(window.simulatedPlaybackInterval);
            playNext();
        }
    }, 1000);
}

function parseDuration(durationStr) {
    if (!durationStr) return 0; // Handle undefined or null duration string
    const parts = durationStr.split(':');
    return parseInt(parts[0] || 0) * 60 + parseInt(parts[1] || 0);
}


function updateSimulatedProgress(current, duration) {
    const progress = (current / duration) * 100;
    progressFill.style.width = `${progress}%`;
    progressHandle.style.left = `${progress}%`;
    currentTime.textContent = formatTime(current);
    totalTime.textContent = formatTime(duration);
    
    // Update full player
    fullProgressFill.style.width = `${progress}%`;
    fullProgressHandle.style.left = `${progress}%`;
    fullCurrentTime.textContent = formatTime(current);
    fullTotalTime.textContent = formatTime(duration);
}

function playAll() {
    const filteredTracks = getFilteredTracks();
    if (filteredTracks.length > 0) {
        playTrack(filteredTracks[0], filteredTracks);
    }
}

function togglePlayPause() {
    if (!currentTrack) return;

    if (isPlaying) {
        if (audioPlayer && !audioPlayer.paused) {
            audioPlayer.pause();
        }
        isPlaying = false;
        if (window.simulatedPlaybackInterval) {
            clearInterval(window.simulatedPlaybackInterval);
        }
    } else {
        if (audioPlayer && audioPlayer.paused) {
            audioPlayer.play().catch(() => simulatePlayback());
        } else {
            simulatePlayback();
        }
        isPlaying = true;
    }

    updatePlayerDisplay();
    updateTrackListDisplay();
}

function playNext() {
    if (currentPlaylist.length === 0) return;
    
    const nextIndex = (currentIndex + 1) % currentPlaylist.length;
    const nextTrack = currentPlaylist[nextIndex];
    
    if (nextTrack) {
        playTrack(nextTrack, currentPlaylist);
    }
}

function playPrevious() {
    if (currentPlaylist.length === 0) return;
    
    const prevIndex = currentIndex === 0 ? currentPlaylist.length - 1 : currentIndex - 1;
    const prevTrack = currentPlaylist[prevIndex];
    
    if (prevTrack) {
        playTrack(prevTrack, currentPlaylist);
    }
}

function seekToPosition(event) {
    if (!currentTrack) return;
    
    const rect = progressBar.getBoundingClientRect();
    const percent = (event.clientX - rect.left) / rect.width;
    const duration = parseDuration(currentTrack.duration);
    const newTime = percent * duration;
    
    if (audioPlayer && !isNaN(audioPlayer.duration)) {
        audioPlayer.currentTime = newTime;
    } else {
        // For simulated playback
        updateSimulatedProgress(newTime, duration);
    }
}

function seekToPositionFullScreen(event) {
    if (!currentTrack) return;
    
    const rect = fullProgressBar.getBoundingClientRect();
    const percent = (event.clientX - rect.left) / rect.width;
    const duration = parseDuration(currentTrack.duration);
    const newTime = percent * duration;
    
    if (audioPlayer && !isNaN(audioPlayer.duration)) {
        audioPlayer.currentTime = newTime;
    } else {
        // For simulated playback
        updateSimulatedProgress(newTime, duration);
    }
}


function updateDuration() {
    if (audioPlayer && currentTrack) {
        totalTime.textContent = currentTrack.duration;
        fullTotalTime.textContent = currentTrack.duration;
    }
}

function updateProgress() {
    if (audioPlayer && !isNaN(audioPlayer.duration)) {
        const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        progressFill.style.width = `${progress}%`;
        progressHandle.style.left = `${progress}%`;
        currentTime.textContent = formatTime(audioPlayer.currentTime);

        // Update full player
        fullProgressFill.style.width = `${progress}%`;
        fullProgressHandle.style.left = `${progress}%`;
        fullCurrentTime.textContent = formatTime(audioPlayer.currentTime);
    }
}

function handleAudioError() {
    console.log('Audio error, simulating playback');
    simulatePlayback();
}

function updatePlayerDisplay() {
    if (!currentTrack) {
        // Mini player
        currentTrackTitle.textContent = 'Select a song to start playing';
        currentTrackArtist.textContent = '';
        currentTrackImage.src = '';
        currentTrackImage.style.display = 'none';
        playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';

        // Full player
        fullTrackTitle.textContent = 'Select a song to start playing';
        fullTrackArtist.textContent = '';
        fullPlayerAlbum.textContent = '';
        fullTrackImage.src = '';
        fullTrackImage.style.display = 'none';
        fullPlayPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
        return;
    }

    // Mini player updates
    currentTrackTitle.textContent = currentTrack.title;
    currentTrackArtist.textContent = currentTrack.artist;
    currentTrackImage.src = currentTrack.coverArt;
    currentTrackImage.style.display = 'block';
    playPauseBtn.innerHTML = isPlaying ? 
        '<i class="fas fa-pause"></i>' : 
        '<i class="fas fa-play"></i>';

    // Full-screen player updates
    fullTrackImage.src = currentTrack.coverArt;
    fullTrackImage.style.display = 'block';
    fullTrackTitle.textContent = currentTrack.title;
    fullTrackArtist.textContent = currentTrack.artist;
    fullPlayerAlbum.textContent = currentTrack.album;
    fullPlayPauseBtn.innerHTML = isPlaying ?
        '<i class="fas fa-pause"></i>' :
        '<i class="fas fa-play"></i>';
}

function updateTrackListDisplay() {
    const trackItems = document.querySelectorAll('.track-item');
    trackItems.forEach(item => {
        const playIcon = item.querySelector('.play-icon');
        // Use track ID for more robust comparison
        const isCurrentItem = currentTrack && item.dataset.id === currentTrack.id; // Assuming you add data-id to track items

        // To fix: current track's play/pause icon doesn't update on togglePlayPause if it's not the first time playing.
        // The previous code was using `item.querySelector('.track-title').textContent === currentTrack.title`
        // which might not be unique if two songs have the same title. Better to use track ID.
        
        // Add data-id to track items if not already present
        if (!item.dataset.id) {
            const trackTitleElement = item.querySelector('.track-title');
            const track = musicTracks.find(t => t.title === trackTitleElement.textContent);
            if (track) {
                item.dataset.id = track.id;
            }
        }
        
        item.classList.toggle('playing', isCurrentItem);
        
        if (isCurrentItem) {
            playIcon.className = `fas ${isPlaying ? 'fa-pause' : 'fa-play'} play-icon`;
        } else {
            playIcon.className = 'fas fa-play play-icon';
        }
    });
}

// Override renderTrackList to add data-id for easier lookups
function renderTrackList(tracks) {
    trackList.innerHTML = '';
    
    tracks.forEach((track, index) => {
        const trackItem = document.createElement('div');
        trackItem.className = `track-item ${currentTrack && currentTrack.id === track.id ? 'playing' : ''}`;
        trackItem.dataset.id = track.id; // Add data-id attribute
        
        trackItem.innerHTML = `
            <div class="track-number">
                <span class="track-number-text">${index + 1}</span>
                <i class="fas ${currentTrack && currentTrack.id === track.id && isPlaying ? 'fa-pause' : 'fa-play'} play-icon"></i>
            </div>
            <div class="track-info">
                <img src="${track.coverArt}" alt="${track.title}" class="track-cover">
                <div class="track-details">
                    <div class="track-title">${track.title}</div>
                    <div class="track-artist">${track.artist}</div>
                </div>
            </div>
            <div class="track-album">${track.album}</div>
            <div class="track-duration-container">
                <div class="track-actions">
                    <i class="fas fa-heart"></i>
                    <i class="fas fa-ellipsis-h"></i>
                </div>
                <div class="track-duration">${track.duration}</div>
            </div>
        `;

        trackItem.addEventListener('click', () => playTrack(track, tracks));
        trackList.appendChild(trackItem);
    });
}


function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

function openFullScreenPlayer() {
    fullScreenPlayer.classList.add('visible');
    // Ensure the full player shows the current track info
    updatePlayerDisplay();
}

function closeFullScreenPlayer() {
    fullScreenPlayer.classList.remove('visible');
}

