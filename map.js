// The following example creates five accessible and
// focusable markers.
function initMap() {
    const kirkland = { lat: 47.6848, lng: -122.1883 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 2,
      center: kirkland,
    });
    // Set LatLng and title text for the markers. The first marker (Boynton Pass)
    // receives the initial focus when tab is pressed. Use arrow keys to
    // move between markers; press tab again to cycle through the map controls.
    const contentString1 =
    '<div id="content">' +
    '<div id="siteNotice">' +
    '<img src="./images/xinyang2.png" alt="born in here" width="100%" height="80%">' +
    "</div>" +
    '<div id="bodyContent">' +
    "<p><b>Xinyang</b>, where I was born in a small town here. " +
    "I was the first girl in our village to go to university. " +
    "I am lucky because I have an awsome mother who always encourages me. " +
    "She believes that knowledge and hard working can change life: " +
    "Do your best, prepare for the worst. " +
    "I was admitted to the university with the second in the high school. " +
    '<img src="./images/xinyang3.png" alt="born in here" width="100%" height="80%">' +
    "</div>" +
    "</div>";
    const contentString2 =
    '<div id="content">' +
    '<div id="siteNotice">' +
    '<img src="./images/beijing1.jpeg" alt="born in here" width="100%" height="80%">' +
    "</div>" +
    '<div id="bodyContent">' +
    "<p><b>Beijing Jiaotong University</b>, where I majored in Information Management. " +
    "I had the best time of my life here. " +
    '<img src="./images/beijing2.jpeg" alt="born in here" width="100%" height="80%">' +
    "I met a lot friends and learn a lot Information technology like UML, Java, SSH framework and so on. " +
    '<img src="./images/beijing4.jpeg" alt="born in here" width="100%" height="80%">' +
   "</div>" +
    "</div>";
    const contentString3 =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<div id="bodyContent">' +
    "<p><b>Shenzhen</b>, where I worked as a software engineer worked for China Molble. " +
    "Worked on Data Calculating System and Unified payment system. Manager more than 10 Vendors to deliver various products. " +
    "</div>" +
    "</div>";
    const contentString4 =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<div id="bodyContent">' +
    "<p><b>Merced, US</b>, where I left my comfort life to meet my husband. " +
    "I quit my job and started to be a housewife. " +
    '<img src="./images/merced.jpeg" alt="born in here" width="100%" height="80%">' +
    "</div>" +
    "</div>";
    const contentString5 =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<div id="bodyContent">' +
    "<p><b>Bellevue, US</b>, where I got my full stack web developer certification from UW. " +
    '<img src="./images/certification.jpeg" alt="born in here" width="100%" height="80%">' +
    'Known HTML, XML, JSON, CSS3, BootStrap4, JavaScript, jQuery, Ajax, Node.js, python3, ' +
    'vue.js, react.js, mongoDB, oracle and MySQL. ' +
    'I am a mom with two boys' +
    '<img src="./images/bellevue.jpeg" alt="born in here" width="100%" height="80%">' +
    "</div>" +
    "</div>";
    const contentString6 =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<div id="bodyContent">' +
    "<p><b>Kirkland, WA</b> Now I am ready to restart my career as a soft engineer. " +
    "I believe that I couldn't failure if I never give it up, keep learning! " +
    "</div>" +
    "</div>";
    const tourStops = [
      [{ lat: 32.12278, lng: 114.06556 }, "<b>Xinyang, China</b>", contentString1],
      [{ lat: 39.9462, lng: 116.3469 }, "<b>Beijing, China</b>", contentString2],
      [{ lat: 22.5429, lng: 114.0596 }, "<b>Shenzhen, China</b>", contentString3],
      [{ lat: 37.3022, lng: -120.4830 }, "<b>Merced, CA, US</b>", contentString4],
      [{ lat: 47.6101, lng: -122.2015 }, "<b>Bellevue, WA, US</b>", contentString5],
      [kirkland, "<b>Kirkland, WA, US</b>", contentString6],
    ];
    // Create an info window to share between markers.
    const infoWindow = new google.maps.InfoWindow({
        maxWidth: 300,
    });
  
    // Create the markers.
    tourStops.forEach(([position, title, content], i) => {
      const marker = new google.maps.Marker({
        position,
        map,
        title: `${i + 1}. ${title} ${content}`,
        label: `${i + 1}`,
        optimized: false,
      });
  
      // Add a click listener for each marker, and set up the info window.
      marker.addListener("click", () => {
        infoWindow.close();
        infoWindow.setContent(marker.getTitle());
        infoWindow.open(marker.getMap(), marker);
      });
    });
  }
  
  window.initMap = initMap;