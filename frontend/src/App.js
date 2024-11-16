import React, { useState } from "react";

const App = () => {
  const [collectedItems, setCollectedItems] = useState([]);
  const [walletConnected, setWalletConnected] = useState(false);

  // Farm items with web-sourced images
  const items = [
    {
      name: "Suspiciously Acting Cow",
      image: "https://img.freepik.com/free-photo/cow-face-close-up_1153-7321.jpg?t=st=1731746316~exp=1731749916~hmac=1e009c1ad8b8d634190284fd4e8b498bc4af943f37da8ce85af1d13071c9c0de&w=1480",
    },
    {
      name: "Baby Chickens",
      image: "https://img.freepik.com/free-photo/little-chicks-farm_1398-4542.jpg?t=st=1731746379~exp=1731749979~hmac=b01952ab343655ae0e496625fd09fb8fffb4a1737fa9e0d4b11cb53fe9bb2427&w=1480",
    },
    {
      name: "Upgraded Tractor",
      image: "https://img.freepik.com/free-photo/harvesters-combine-parts-plant-are-waiting-sales_146671-19095.jpg?t=st=1731746471~exp=1731750071~hmac=3e52d0a587a64a7bff2f4b4e5fb7cf66c4ca51df3d5a772dca0742bb8f335f12&w=1480",
    },
    {
      name: "Inquisitive Pig",
      image: "https://img.freepik.com/free-photo/absolutely-adorable-pig-looking-up_493961-332.jpg?t=st=1731746545~exp=1731750145~hmac=8a3acbcdd78ce69a6e2ca2769dc77a601fbc38370cad1cdaa90a8c62d9c319eb&w=1480",
    },
    {
      name: "Sleepy Farmer",
      image: "https://img.freepik.com/premium-photo/senior-man-straw-field-lying_484921-30935.jpg?ga=GA1.1.238721676.1729286541&semt=ais_hybrid",
    },
  ];

  const collectItem = (item) => {
    setCollectedItems((prev) => [...prev, item]);
  };

  const handleConnectWallet = () => {
    const funnyMessages = [
      "A cow just tried to rug pull you! 🐮💸",
      "The chicken said 'Not your keys, not your cheese!' 🐔",
      "A tractor beeped angrily and drove off! 🚜💨",
      "The disco pig wants you to boogie before connecting! 🕺🐷",
      "The farmer is sleeping; try again later! 😴👨‍🌾",
    ];
    const randomMessage =
      funnyMessages[Math.floor(Math.random() * funnyMessages.length)];
    alert(randomMessage);

    // Simulate wallet connection
    setWalletConnected(true);
  };

  // Inline styles for FarmVille theme
  const styles = {
    app: {
      fontFamily: "'Comic Sans MS', cursive, sans-serif",
      backgroundColor: "#fef5e7",
      textAlign: "center",
      padding: "20px",
    },
    header: {
      backgroundColor: "#ffde7d",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
    headerTitle: {
      fontSize: "2.5rem",
      color: "#e76f51",
    },
    headerDescription: {
      fontSize: "1.2rem",
      color: "#264653",
    },
    button: {
      marginTop: "20px",
      padding: "10px 20px",
      fontSize: "1rem",
      fontWeight: "bold",
      color: "#ffffff",
      backgroundColor: "#e76f51",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      transition: "background-color 0.3s",
    },
    buttonHover: {
      backgroundColor: "#d35d45",
    },
    farmItems: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
      gap: "20px",
      margin: "20px auto",
      justifyContent: "center",
    },
    farmItem: {
      cursor: "pointer",
      border: "2px dashed #2a9d8f",
      borderRadius: "10px",
      padding: "10px",
      backgroundColor: "#f4a261",
      transition: "transform 0.3s, box-shadow 0.3s",
    },
    farmItemImage: {
      width: "100px",
      height: "100px",
      borderRadius: "10px",
    },
    farmItemName: {
      fontSize: "1rem",
      marginTop: "10px",
      color: "#ffffff",
    },
    footer: {
      marginTop: "20px",
      backgroundColor: "#e9c46a",
      padding: "15px",
      borderRadius: "10px",
    },
    footerTitle: {
      fontSize: "1.5rem",
      margin: "0 0 10px",
    },
    collectedItemList: {
      listStyleType: "none",
      padding: "0",
    },
    collectedItem: {
      fontSize: "1rem",
      color: "#264653",
    },
  };

  return (
    <div style={styles.app}>
      <header style={styles.header}>
        <h1 style={styles.headerTitle}>🐮 MyETHFarm 🎉</h1>
        <p style={styles.headerDescription}>
          Welcome to the funniest farm on the blockchain! Click on farm items
          to collect them as NFTs!
        </p>
        <button style={styles.button} onClick={handleConnectWallet}>
          {walletConnected ? "Wallet Connected ✅" : "Connect Wallet"}
        </button>
      </header>

      <div style={styles.farmItems}>
        {items.map((item, index) => (
          <div
            key={index}
            style={styles.farmItem}
            onClick={() => collectItem(item)}
          >
            <img
              src={item.image}
              alt={item.name}
              style={styles.farmItemImage}
            />
            <p style={styles.farmItemName}>{item.name}</p>
          </div>
        ))}
      </div>

      <footer style={styles.footer}>
        <h2 style={styles.footerTitle}>🌟 Collected Items 🌟</h2>
        <ul style={styles.collectedItemList}>
          {collectedItems.map((item, index) => (
            <li key={index} style={styles.collectedItem}>
              {item.name}
            </li>
          ))}
        </ul>
      </footer>
    </div>
  );
};

export default App;

