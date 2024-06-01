// src/OutputNode.jsx
import PropTypes from 'prop-types';
import { Handle } from 'reactflow';

const OutputNode = ({ data }) => {
  const detailsLines = data.details.split('\n');
  return (
    <div style={{ padding: 0, border: '2px solid #777', borderRadius: 10, background: '#90EE90', width: 140, boxShadow: '4px 4px 10px 3px grey' }}>
      <div style={{ background: '#192841', color: 'white', padding: '5px', borderRadius: '10px 10px 0 0', margin: "0" }}>
        <strong>{data.label}</strong>
      </div>
      {detailsLines.map((line, index) => (
        <div style={{ margin: 5, position: 'relative', background:'white', border:'2px solid #097969' ,borderRadius:5}} key={index}>
          {line}
        </div>
      ))}
      <div style={{ marginRight: 15,display:'flex',justifyContent:'flex-end'}}>
        <span> {data.handleLabel }</span>
      </div>
      <div style={{ background:'white', position: 'absolute', top: '90%', right: 7, transform: 'translateY(-50%)' }}>
        <Handle type="source" position="right" style={{position:'absolute', top: '50%', background:'white',border:'2px solid black', }}/>
      </div>
    </div>
  );
};

OutputNode.propTypes = {
  data: PropTypes.shape({
    label: PropTypes.string.isRequired,
    details: PropTypes.string.isRequired,
    background: PropTypes.string,
    handleLabel: PropTypes.string,
  }).isRequired,
};

export default OutputNode;
