// src/data/games.js
import game1Thumb from '/src/assets/images/games/game1.png';
import game2Thumb from '/src/assets/images/games/game2.png';
import game0Thumb from '/src/assets/images/games/game0.png';

//gallery
import game1image1 from '/src/assets/images/games/gallery/game1/1.jpg';
import game1image2 from '/src/assets/images/games/gallery/game1/2.jpg';
import game1image3 from '/src/assets/images/games/gallery/game1/3.jpg';
import game1image4 from '/src/assets/images/games/gallery/game1/4.jpg';

import game2image1 from '/src/assets/images/games/gallery/game2/1.png';
import game2image2 from '/src/assets/images/games/gallery/game2/2.png';
import game2image3 from '/src/assets/images/games/gallery/game2/3.png';
import game2image4 from '/src/assets/images/games/gallery/game2/4.png';
import game2image5 from '/src/assets/images/games/gallery/game2/5.png';
import game2image6 from '/src/assets/images/games/gallery/game2/6.png';
import game2image7 from '/src/assets/images/games/gallery/game2/7.png';
import game2image8 from '/src/assets/images/games/gallery/game2/8.png';
import game2image9 from '/src/assets/images/games/gallery/game2/9.png';
import game2image10 from '/src/assets/images/games/gallery/game2/10.png';
import game2image11 from '/src/assets/images/games/gallery/game2/10.png';


export const gamesData = [
  { 
    id: 'toystore', 
    title: 'Toystore', 
    image: game1Thumb,
    tags: ['Arcade','Retro','Puzzle'],
    description: `This game was inspired by a classic Hungarian browser game once known as 'Játékbolt'. The goal of the game is to collect the toys scattered across the field. You must pair each toy with its own box. The game ends when there is no more space. Try to collect as many as possible.`,
    buttonText: 'Explore Toystore',
    buttonLink: '/game/toystore',
    privacyLink: '/privacy/toystore',
    storeLinks: {
      playstore: 'https://www.google.com/'
    },
    gallery: [game1image1, game1image2, game1image3,game1image4],
    privacyHTML:
    `
    <div>
  <img src="/src/assets/images/games/game1b.png" alt="Toystore Logo" class="logo">
  <h1>Toystore</h1>
  <h2>Privacy Policy</h2>
  <hr>
	<p>This privacy policy applies to the Toystore Game app (hereby referred to as "Application") for mobile devices that was created by Titus Games (hereby referred to as "Service Provider") as an Ad Supported service. This service is intended for use "AS IS".</p>
	<br>
	<strong>Information Collection and Use</strong>
	<p>The Application collects information when you download and use it. This information may include information such as </p>
	<ul>
	<li>Your device's Internet Protocol address (e.g. IP address)</li>
	<li>The pages of the Application that you visit, the time and date of your visit, the time spent on those pages</li>
	<li>The time spent on the Application</li><li>The operating system you use on your mobile device</li>
	</ul>
	<p></p>
	<br>
	<p>The Application does not gather precise information about the location of your mobile device.</p>
	<div style="display: none;">
	<p>The Application collects your device's location, which helps the Service Provider determine your approximate geographical location and make use of in below ways:</p>
	<ul>
	<li>Geolocation Services: The Service Provider utilizes location data to provide features such as personalized content, relevant recommendations, and location-based services.</li>
	<li>Analytics and Improvements: Aggregated and anonymized location data helps the Service Provider to analyze user behavior, identify trends, and improve the overall performance and functionality of the Application.</li>
	<li>Third-Party Services: Periodically, the Service Provider may transmit anonymized location data to external services. These services assist them in enhancing the Application and optimizing their offerings.</li>
	</ul>
	</div>
	<br>
	<p>The Service Provider may use the information you provided to contact you from time to time to provide you with important information, required notices and marketing promotions.</p>
	<br>
	<p>For a better experience, while using the Application, the Service Provider may require you to provide us with certain personally identifiable information. The information that the Service Provider request will be retained by them and used as described in this privacy policy.</p>
	<br>
	<strong>Third Party Access</strong>
	<p>Only aggregated, anonymized data is periodically transmitted to external services to aid the Service Provider in improving the Application and their service. The Service Provider may share your information with third parties in the ways that are described in this privacy statement.</p>

	<p>Please note that the Application utilizes third-party services that have their own Privacy Policy about handling data. Below are the links to the Privacy Policy of the third-party service providers used by the Application:</p>
	<ul>
	  <li><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Firebase</a></li>
	  <li><a href="https://unity3d.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Unity</a></li>
	</ul>

	<br>
	<p>The Service Provider may disclose User Provided and Automatically Collected Information:</p>
	<ul>
	<li>as required by law, such as to comply with a subpoena, or similar legal process;</li>
	<li>when they believe in good faith that disclosure is necessary to protect their rights, protect your safety or the safety of others, investigate fraud, or respond to a government request;</li>
	<li>with their trusted services providers who work on their behalf, do not have an independent use of the information we disclose to them, and have agreed to adhere to the rules set forth in this privacy statement.</li>
	</ul>
	<p></p>
	<br>
	<strong>Opt-Out Rights</strong>
	<p>You can stop all collection of information by the Application easily by uninstalling it. You may use the standard uninstall processes as may be available as part of your mobile device or via the mobile application marketplace or network.</p>
	<br><strong>Data Retention Policy</strong>
	<p>The Service Provider will retain User Provided data for as long as you use the Application and for a reasonable time thereafter. If you'd like them to delete User Provided Data that you have provided via the Application, please contact them at toystore.game.contact@gmail.com and they will respond in a reasonable time.</p>
<p><a href="/privacy/{{ID}}/delete-data">Instructions for Data Deletion</a></p>
	<br>
	<strong>Children</strong>
	<p>The Service Provider does not use the Application to knowingly solicit data from or market to children under the age of 13.</p>
	<div>
	<br>
	<p>The Application does not address anyone under the age of 13. The Service Provider does not knowingly collect personally identifiable information from children under 13 years of age. In the case the Service Provider discover that a child under 13 has provided personal information, the Service Provider will immediately delete this from their servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact the Service Provider (toystore.game.contact@gmail.com) so that they will be able to take the necessary actions.</p>
	</div>
	<!---->
	<br>
	<strong>Security</strong>
	<p>The Service Provider is concerned about safeguarding the confidentiality of your information. The Service Provider provides physical, electronic, and procedural safeguards to protect information the Service Provider processes and maintains.</p>
	<br>
	<strong>Changes</strong>
	<p>This Privacy Policy may be updated from time to time for any reason. The Service Provider will notify you of any changes to the Privacy Policy by updating this page with the new Privacy Policy. You are advised to consult this Privacy Policy regularly for any changes, as continued use is deemed approval of all changes.</p>
	<br>
	<p>This privacy policy is effective as of 2025-10-13</p>
	<br>
	<strong>Your Consent</strong>
	<p>By using the Application, you are consenting to the processing of your information as set forth in this Privacy Policy now and as amended by us.</p>
	<br>
	<strong>Contact Us</strong>
	<p>If you have any questions regarding privacy while using the Application, or have questions about the practices, please contact the Service Provider via email at <b>titusgames.studios@gmail.com</b> or <b>toystore.game.contact@gmail.com.</b></p>
	<hr>
    </div>`,
    deletionHTML: `
      <img src="/src/assets/images/games/game1b.png" alt="Toystore Logo" class="logo">
      <h1>Toystore</h1>
      <h2>Request Data Deletion</h2>
      <hr>
      <p>To request deletion of your data collected by Toystore (Titus Games)...</p>
      <ol>
        <li>Send a request via email: <strong>titusgames.studios@gmail.com</strong><strong>toystore.game.contact@gmail.com</strong></li>
		<br>
        <li>Provide your username.</li>
        <li>Include a screenshot to verify ownership.</li>
      </ol>
    `
  },
  { 
    id: 'endless-depths', 
    title: 'Endless Depths', 
    image: game2Thumb,
    tags: ['Adventure', 'RPG', 'Turn-based'],
    description: 'How deep can you go? A challenging survival RPG with procedural world generation, realistic armor and injury simulation and turn based combat. This game is still in development.',
    buttonText: 'Dive In',
    buttonLink: '/game/endless-depths',
    storeLinks: {
      itch: 'https://titusgames.itch.io/endless-depths'
    },
    gallery: [game2image1, game2image2, game2image3, game2image4,game2image5, game2image6, game2image7, game2image8, game2image9,game2image10, game2image11],
	updates: [
    {
      id: 'player-character-rework',
      title: 'Armor, Blades, and Bucklers: The Player Visuals Update',
      date: '2026-01-30',
      summary: `In this update, I've moved away from a static character sprite to a Modular Paper Doll system. This allows the player character to dynamically visualize every piece of armor, clothing, and weaponry equipped in the inventory.`,
      content: `
				<h3>The Paper Doll & Modular Equipment System</h3>
				<p>In this update, I've moved away from a static character sprite to a Modular Paper Doll system. This allows the player character to dynamically visualize every piece of armor, clothing, and weaponry equipped in the inventory.</p>

				<h3>🛠 Technical Deep Dive: The Layering Engine</h3>
				<p>Unlike a simple 4-direction sprite, our character utilizes a 32-pose animation set. To handle this complexity, I developed a custom "handshake" between the Inventory and the Player Visuals:</p>
				
				<ul>
					<li><strong>Dynamic Sprite Syncing:</strong> Every frame, a LateUpdate script parses the current animation index from the body and synchronizes it across all equipped layers.</li>
					<li><strong>The 4-Layer Armor Stack:</strong> I've implemented a layered rendering system that allows for realistic equipment combinations: Under-Gambesons, Chainmail, Plate, and Surcoats.</li>
				</ul>

				<h3>📐 Solving the Depth Problem</h3>
				<p>One of the biggest challenges was handling the Z-sorting of limbs and weapons. I solved this by implementing a Directional Sorting Logic that shifts the SortingOrder of specific sprite renderers based on the current animation frame index.</p>
				`}
			]
 	 }
];