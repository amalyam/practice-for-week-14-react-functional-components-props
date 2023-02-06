import "./BaseStats.css";

function BaseStats({ hp, attack, defense, speed, clicker }) {
  return (
    <div className="base-stats">
      <h1>BaseStats</h1>
      <button class="sp-stats" onclick={clicker}>
        Check Special Stats
      </button>
      <table>
        <tbody>
          <tr>
            <td>Hit Points</td>
            <td>{hp}</td>
          </tr>
          <tr>
            <td>Attack</td>
            <td>{attack}</td>
          </tr>
          <tr>
            <td>Defense</td>
            <td>{defense}</td>
          </tr>
          <tr>
            <td>Speed</td>
            <td>{speed}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
