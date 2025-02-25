import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { Modal, Button } from "antd";
import NavigationBar from "./components/NavigationBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Show the modal when the component mounts
  useEffect(() => {
    setIsModalVisible(true);
  }, []);

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  const handleVisitNewSite = () => {
    window.open("https://carolinepham.dev/", "_blank", "noopener,noreferrer");
    setIsModalVisible(false);
  };

  return (
    <div id="App">
      <NavigationBar />
      <Home />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
      <Modal
        title="New Site Announcement"
        open={isModalVisible}
        onCancel={handleModalClose}
        footer={[
          <Button key="visit" type="primary" onClick={handleVisitNewSite}>
            Visit New Site
          </Button>,
          <Button key="close" onClick={handleModalClose}>
            Close
          </Button>,
        ]}
      >
        <p>This is my old portfolio site!</p>
        <p>Click "Visit New Site" to check out my current one.</p>
      </Modal>
    </div>
  );
}

export default App;
