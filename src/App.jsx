import { useState } from "react";
import "./App.css";
import { MinusIcon, PlusIcon } from "lucide-react";
import sampleSize from "lodash.samplesize";

const cardTypes = [
  "coin",
  "lumber",
  "metal",
  "hide",
  "arrowvine",
  "axenut",
  "corpsecap",
  "flamefruit",
  "rockroot",
  "snowthistle",
  "random-item",
  "scenario-coin",
];

const filenamesByType = {
  coin: [
    "fh-one-coin-1361.png",
    "fh-one-coin-1362.png",
    "fh-one-coin-1363.png",
    "fh-one-coin-1364.png",
    "fh-one-coin-1365.png",
    "fh-one-coin-1366.png",
    "fh-one-coin-1367.png",
    "fh-one-coin-1368.png",
    "fh-one-coin-1369.png",
    "fh-one-coin-1370.png",
    "fh-one-coin-1371.png",
    "fh-one-coin-1372.png",
    "fh-three-coins-1379.png",
    "fh-three-coins-1380.png",
    "fh-two-coins-1373.png",
    "fh-two-coins-1374.png",
    "fh-two-coins-1375.png",
    "fh-two-coins-1376.png",
    "fh-two-coins-1377.png",
    "fh-two-coins-1378.png",
  ],
  hide: [
    "fh-hide-1393.png",
    "fh-hide-1394.png",
    "fh-hide-1395.png",
    "fh-hide-1396.png",
    "fh-hide-1397.png",
    "fh-hide-1398.png",
    "fh-hide-1399.png",
    "fh-hide-1400.png",
  ],
  lumber: [
    "fh-lumber-1401.png",
    "fh-lumber-1402.png",
    "fh-lumber-1403.png",
    "fh-lumber-1404.png",
    "fh-lumber-1405.png",
    "fh-lumber-1406.png",
    "fh-lumber-1407.png",
    "fh-lumber-1408.png",
  ],
  metal: [
    "fh-metal-1409.png",
    "fh-metal-1410.png",
    "fh-metal-1411.png",
    "fh-metal-1412.png",
    "fh-metal-1413.png",
    "fh-metal-1414.png",
    "fh-metal-1415.png",
    "fh-metal-1416.png",
  ],
  rockroot: ["fh-rockroot-1389.png", "fh-rockroot-1390.png"],
  snowthistle: ["fh-snowthistle-1391.png", "fh-snowthistle-1392.png"],
  arrowvine: ["fh-arrowvine-1381.png", "fh-arrowvine-1382.png"],
  axenut: ["fh-axenut-1383.png", "fh-axenut-1384.png"],
  corpsecap: ["fh-corpsecap-1385.png", "fh-corpsecap-1386.png"],
  flamefruit: ["fh-flamefruit-1387.png", "fh-flamefruit-1388.png"],
  "random-item": ["fh-random-item-1417.png"],
  "scenario-coin": ["fh-scenario-coin-1418.png", "fh-scenario-coin-1419.png"],
};

function App() {
  const [coinCount, setcoinCount] = useState(0);
  const [lumberCount, setlumberCount] = useState(0);
  const [metalCount, setmetalCount] = useState(0);
  const [hideCount, sethideCount] = useState(0);
  const [arrowvineCount, setarrowvineCount] = useState(0);
  const [axenutCount, setaxenutCount] = useState(0);
  const [corpsecapCount, setcorpsecapCount] = useState(0);
  const [flamefruitCount, setflamefruitCount] = useState(0);
  const [rockrootCount, setrockrootCount] = useState(0);
  const [snowthistleCount, setsnowthistleCount] = useState(0);
  const [randomitemCount, setrandomitemCount] = useState(0);
  const [scenariocoinCount, setscenariocoinCount] = useState(0);

  const randomCoin = sampleSize(filenamesByType.coin, coinCount);
  const randomLumber = sampleSize(filenamesByType.lumber, lumberCount);
  const randomMetal = sampleSize(filenamesByType.metal, metalCount);
  const randomHide = sampleSize(filenamesByType.hide, hideCount);
  const randomArrowvine = sampleSize(filenamesByType.arrowvine, arrowvineCount);
  const randomAxenut = sampleSize(filenamesByType.axenut, axenutCount);
  const randomCorpsecap = sampleSize(filenamesByType.corpsecap, corpsecapCount);
  const randomFlamefruit = sampleSize(
    filenamesByType.flamefruit,
    flamefruitCount
  );
  const randomRockroot = sampleSize(filenamesByType.rockroot, rockrootCount);
  const randomSnowthistle = sampleSize(
    filenamesByType.snowthistle,
    snowthistleCount
  );
  const randomRandomitem = sampleSize(
    filenamesByType["random-item"],
    randomitemCount
  );
  const randomScenariocoin = sampleSize(
    filenamesByType["scenario-coin"],
    scenariocoinCount
  );

  const [sliderValue, setsliderValue] = useState(0);

  const [randomAllCards, setRandomAllCards] = useState([]);

  const allCards = randomCoin
    .concat(randomLumber)
    .concat(randomMetal)
    .concat(randomHide)
    .concat(randomArrowvine)
    .concat(randomAxenut)
    .concat(randomCorpsecap)
    .concat(randomFlamefruit)
    .concat(randomRockroot)
    .concat(randomSnowthistle)
    .concat(randomRandomitem)
    .concat(randomScenariocoin);

  const max =
    coinCount +
    lumberCount +
    metalCount +
    hideCount +
    arrowvineCount +
    axenutCount +
    corpsecapCount +
    flamefruitCount +
    rockrootCount +
    snowthistleCount +
    randomitemCount +
    scenariocoinCount;

  const maxCoins = filenamesByType.coin.length;
  const maxLumber = filenamesByType.lumber.length;
  const maxMetal = filenamesByType.metal.length;
  const maxHide = filenamesByType.hide.length;
  const maxArrowvine = filenamesByType.arrowvine.length;
  const maxAxenut = filenamesByType.axenut.length;
  const maxCorpsecap = filenamesByType.corpsecap.length;
  const maxFlamefruit = filenamesByType.flamefruit.length;
  const maxRockroot = filenamesByType.rockroot.length;
  const maxSnowthistle = filenamesByType.snowthistle.length;
  const maxRandomitem = filenamesByType["random-item"].length;
  const maxScenariocoin = filenamesByType["scenario-coin"].length;

  return (
    <div>
      <div className="title">Frostyloot</div>
      <div className="app">
        <Item
          name={cardTypes[0]}
          count={coinCount}
          setCount={setcoinCount}
          max={maxCoins}
        />
        <Item
          name={cardTypes[1]}
          count={lumberCount}
          setCount={setlumberCount}
          max={maxLumber}
        />
        <Item
          name={cardTypes[2]}
          count={metalCount}
          setCount={setmetalCount}
          max={maxMetal}
        />
        <Item
          name={cardTypes[3]}
          count={hideCount}
          setCount={sethideCount}
          max={maxHide}
        />
        <Item
          name={cardTypes[4]}
          count={arrowvineCount}
          setCount={setarrowvineCount}
          max={maxArrowvine}
        />
        <Item
          name={cardTypes[5]}
          count={axenutCount}
          setCount={setaxenutCount}
          max={maxAxenut}
        />
        <Item
          name={cardTypes[6]}
          count={corpsecapCount}
          setCount={setcorpsecapCount}
          max={maxCorpsecap}
        />
        <Item
          name={cardTypes[7]}
          count={flamefruitCount}
          setCount={setflamefruitCount}
          max={maxFlamefruit}
        />
        <Item
          name={cardTypes[8]}
          count={rockrootCount}
          setCount={setrockrootCount}
          max={maxRockroot}
        />
        <Item
          name={cardTypes[9]}
          count={snowthistleCount}
          setCount={setsnowthistleCount}
          max={maxSnowthistle}
        />
        <Item
          name={cardTypes[10]}
          count={randomitemCount}
          setCount={setrandomitemCount}
          max={maxRandomitem}
        />
        <Item
          name={cardTypes[11]}
          count={scenariocoinCount}
          setCount={setscenariocoinCount}
          max={maxScenariocoin}
        />
        <div>Number of cards to draw</div>
        <input
          type="range"
          min={0}
          max={max}
          value={sliderValue}
          onChange={(e) => setsliderValue(e.target.value)}
        />
        <div>{sliderValue}</div>

        <button
          className="generateButton"
          onClick={() => {
            const randomCards = sampleSize(allCards, sliderValue);
            setRandomAllCards(randomCards);
          }}
        >
          Generate
        </button>

        <button
          className="reset"
          onClick={() => {
            setcoinCount(0);
            setlumberCount(0);
            setmetalCount(0);
            sethideCount(0);
            setarrowvineCount(0);
            setaxenutCount(0);
            setcorpsecapCount(0);
            setflamefruitCount(0);
            setrockrootCount(0);
            setsnowthistleCount(0);
            setrandomitemCount(0);
            setscenariocoinCount(0);
            setsliderValue(0);
            setRandomAllCards([]);
          }}
        >
          Reset
        </button>

        <div>
          {randomAllCards.map((card) => (
            <img key={card} src={card} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Item({ name, count, setCount, max }) {
  const isMaxCount = count >= max;
  const isMinCount = count === 0;

  return (
    <div className="item">
      <div className="item-name">{name}</div>
      <button
        disabled={isMinCount}
        className="item-button"
        onClick={() => setCount(count - 1)}
      >
        <MinusIcon />
      </button>
      <div className="item-count">{count}</div>
      <button
        disabled={isMaxCount}
        className="item-button"
        onClick={() => setCount(count + 1)}
      >
        <PlusIcon />
      </button>
    </div>
  );
}

export default App;
