import React from 'react';
import TurningPage from '../Components/TurningPage';
import './Styles/MainPage.css';
import { Link } from 'react-router-dom';
// import Graph from '../Components/Graph';

const MainPage = () => {
  return (
    <div className="main-page">
      <nav className="navbar">
        <div className="navbar-logo">
          <img src="favicon.ico" alt="Logo" />
        </div>
        <div className="navbar-links">
          <a href="#home">Home</a>
          <a href="#here">Explore us</a>
          <a href="/info">Information forum</a>

        </div>
      </nav>
      <div className="content-container">
        <div className="turning-page-container">
          <TurningPage />
        </div>
        <div className="description-container">
          <h2><span>WELCOME TO </span><span className="green-text">KISAAN VIKAS</span></h2>
          <h3><span className="tagline-text">HARVESTING EASE, PLANTING PROSPERITY</span></h3>
          <p>
          At Kisaan Vikas, we're not just about farming; we're about revolutionizing it. We understand the challenges and uncertainties that farmers face daily. That's why we've dedicated ourselves to empowering them with the tools, knowledge, and support they need to not only overcome these challenges but to thrive. Our platform is a testament to our belief that with the right resources, farming can be both profitable and sustainable. We're bringing the latest in precision agriculture, crop health management, and financial solutions directly to the hands that feed us. From advanced soil monitoring technologies to decentralized crop insurance and agri-fintech solutions, we're ensuring that our farmers are equipped for whatever lies ahead.
          </p>
        </div>
      </div>

<h2 style={{
 textAlign: 'center',
 marginBottom: '20px',
 fontSize: '32px',
 border: '2px solid #000',
 boxShadow: '0 0 10px rgba(0,0,0,0.5)',
 animation: 'shake 4s infinite',
 backgroundColor: '#3A8FD5'
}}>EXPLORE US</h2>


<div id="here" className="card mb-3 custom-card" style={{ maxWidth: '700px', marginLeft: '2rem', backgroundColor: '#2DAB24', boxShadow: '0 0 10px 20px rgba(255, 255, 255, 0.5)', transition: 'background-color 0.3s ease'}}>
 <div className="row g-0">
    <div className="col-md-4">
    <Link to="/home" style={{ textDecoration: 'none', color: 'inherit' }}>
      <img src="Card1.png" className="img-fluid rounded-start" alt="..."/>
    </Link>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title" style={{ color: 'white' }}>Precision Agriculture Solutions</h5>
        <p className="card-text">Our Precision Agriculture Solutions are at the forefront of farming innovation, designed to optimize the use of critical resources like water, fertilizers, and pesticides. By analyzing the specific conditions of your land, including size and soil quality, our platform recommends the most efficient application rates and techniques to enhance crop yield. This not only maximizes productivity but also minimizes environmental impact, ensuring a sustainable and profitable farming operation.</p>
      </div>
    </div>
 </div>
</div>

<div className="card mb-3 custom-card" style={{ maxWidth: '700px', marginRight: '2rem', backgroundColor: '#2DAB24', boxShadow: '0 0 10px 20px rgba(255, 255, 255, 0.5)', transition: 'background-color 0.3s ease' }}>
 <div className="row g-0">
    <div className="col-md-4">
    <Link to="/planthealth2" style={{ textDecoration: 'none', color: 'inherit' }}>
      <img src="Card2.png" className="img-fluid rounded-start" alt="..."/>
      </Link>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title" style={{ color: 'white' }}>Crop Disease Detection and Management</h5>
        <p className="card-text">With our advanced Crop Disease Detection and Management feature, we empower farmers to identify and manage crop diseases swiftly and accurately. Utilizing state-of-the-art image recognition technology, our system analyzes images captured in the field, diagnosing potential issues and providing expert recommendations for treatment. This proactive approach minimizes crop loss, ensures healthier yields, and enhances overall farm management.</p>
      </div>
    </div>
 </div>
</div>

<div className="card mb-3 custom-card" style={{ display: 'flex', maxWidth: '700px', marginLeft: '2rem', backgroundColor: '#2DAB24', boxShadow: '0 0 10px 15px rgba(255, 255, 255, 0.5)', transition: 'background-color 0.3s ease', alignItems: 'flex-start' }}>
 <div className="row g-0" style={{ flexGrow: '4' }}>
    <div className="col-md-4">
      <Link to="/weather" style={{ textDecoration: 'none', color: 'inherit' }}>
        <img src="Card3.png" className="img-fluid rounded-start" alt="..."/>
      </Link>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title" style={{ color: 'white' }}>Climate Resilience Solutions</h5>
        <p className="card-text">Our Climate Resilience Solutions are designed to help farms withstand the challenges posed by climate change. From droughts and floods to extreme weather events, our strategies focus on improving soil health, enhancing water management, and promoting crop diversity. By adopting these practices, farmers can secure their livelihoods against unpredictable environmental conditions, ensuring long-term sustainability and productivity.</p>
      </div>
    </div>
 </div>
 {/* <Graph /> */}
</div>


<div className="card mb-3 custom-card" style={{ maxWidth: '700px', marginRight: '2rem', backgroundColor: '#2DAB24', boxShadow: '0 0 10px 15px rgba(255, 255, 255, 0.5)', transition: 'background-color 0.3s ease' }}>
 <div className="row g-0">
    <div className="col-md-4">
      <img src="Card4.png" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title" style={{ color: 'white' }}>Soil Monitoring and Management</h5>
        <p className="card-text">Soil is the foundation of agriculture, and our Soil Monitoring and Management feature ensures it receives the attention it deserves. By analyzing soil types and conditions across different regions, we provide tailored advice on management practices that enhance soil quality and fertility. This scientific approach to soil health not only boosts crop production but also contributes to environmental conservation.</p>
      </div>
    </div>
 </div>
</div>


<div className="card mb-3 custom-card" style={{ maxWidth: '700px', marginLeft: '2rem', backgroundColor: '#2DAB24', boxShadow: '0 0 10px 15px rgba(255, 255, 255, 0.5)', transition: 'background-color 0.3s ease' }}>
 <div className="row g-0">
    <div className="col-md-4">
      <img src="Card5.png" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title" style={{ color: 'white' }}> Plant-Microbe Interaction Enhancer</h5>
        <p className="card-text">Leverage the power of nature with our Plant-Microbe Interaction Enhancer, a revolutionary feature that boosts your crops' growth and resilience by facilitating beneficial relationships between plants and soil microbes. This natural symbiosis improves nutrient uptake, enhances soil structure, and naturally protects plants against pests and diseases, leading to healthier crops and reduced reliance on chemical inputs.</p>
      </div>
    </div>
 </div>
</div>


<div className="card mb-3 custom-card" style={{ maxWidth: '700px', marginRight: '2rem', backgroundColor: '#2DAB24', boxShadow: '0 0 10px 15px rgba(255, 255, 255, 0.5)', transition: 'background-color 0.3s ease' }}>
 <div className="row g-0">
    <div className="col-md-4">
      <img src="Card6.png" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title" style={{ color: 'white' }}>Crop Rotation Planners</h5>
        <p className="card-text">Embrace sustainable farming practices with our Crop Rotation Planners. This feature is designed to help farmers plan and implement crop rotation strategies, improving soil health, reducing pest and disease pressure, and enhancing crop yields. By diversifying what’s planted, farmers can ensure a balanced use of soil nutrients and break cycles of pests and diseases, promoting a healthier farm ecosystem.</p>
      </div>
    </div>
 </div>
</div>

<div className="card mb-3 custom-card" style={{ maxWidth: '700px', marginLeft: '2rem', backgroundColor: '#2DAB24', boxShadow: '0 0 10px 15px rgba(255, 255, 255, 0.5)', transition: 'background-color 0.3s ease' }}>
 <div className="row g-0">
    <div className="col-md-4">
      <img src="Card2.png" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title" style={{ color: 'white' }}>Decentralized Crop Insurance</h5>
        <p className="card-text">Navigate the uncertainties of farming with our Decentralized Crop Insurance, a feature that brings the security and transparency of blockchain technology to crop insurance policies. This innovative solution simplifies the management of policies, premiums, and claims, offering farmers a secure, transparent platform for their insurance needs. With smart contracts, claims processing is automated and verifiable, ensuring timely support and financial protection against unforeseen agricultural risks.</p>
      </div>
    </div>
 </div>
</div>

<div className="card mb-3 custom-card" style={{ maxWidth: '700px', marginRight: '2rem', backgroundColor: '#2DAB24', boxShadow: '0 0 10px 15px  rgba(255, 255, 255, 0.5)', transition: 'background-color 0.3s ease' }}>
 <div className="row g-0">
    <div className="col-md-4">
    <Link to="/info" style={{ textDecoration: 'none', color: 'inherit' }}>
      <img src="Card1.png" className="img-fluid rounded-start" alt="..."/>
    </Link>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title"style={{ color: 'white' }}>Government Policies and Schemes</h5>
        <p className="card-text">Stay informed and take full advantage of government policies and schemes with our comprehensive policy repository. This feature is designed to keep farmers up-to-date with the latest agricultural policies, providing easy access to official documents, forms, and application procedures. By simplifying the process of finding and applying for government support, we ensure that farmers have the knowledge and resources they need to thrive.</p>
      </div>
    </div>
 </div>
</div>

<div className="card mb-3 custom-card" style={{ maxWidth: '700px', marginLeft: '2rem', backgroundColor: '#2DAB24', boxShadow: '0 0 10px 15px rgba(255, 255, 255, 0.5)', transition: 'background-color 0.3s ease' }}>
 <div className="row g-0">
    <div className="col-md-4">
    <Link to="/info" style={{ textDecoration: 'none', color: 'inherit' }}>
      <img src="Card3.png" className="img-fluid rounded-start" alt="..."/>
      </Link>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title" style={{ color: 'white' }}>Agri-Fintech Solutions</h5>
        <p className="card-text">Empower your farming operation with our Agri-Fintech Solutions, designed to enhance financial access and stability for farmers. From micro-loans that support seasonal investments to crop insurance that protects against loss, our platform connects farmers with the financial tools they need to grow. With a focus on simplicity and accessibility, we're making financial services more inclusive for the agricultural sector, fostering growth and resilience</p>
      </div>
    </div>
 </div>
</div>


    </div>
  );
};

export default MainPage;
