import React from 'react';
import './Cursor.css'; // Import CSS file for cursor styling

class Cursor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posX: 0,
      posY: 0
    };
  }

  componentDidMount() {
    // Add event listener to track mouse movement
    document.addEventListener('mousemove', this.handleMouseMove);
  }

  componentWillUnmount() {
    // Remove event listener when component is unmounted
    document.removeEventListener('mousemove', this.handleMouseMove);
  }

  handleMouseMove = (e) => {
    // Update state with mouse coordinates
    this.setState({
      posX: e.clientX,
      posY: e.clientY
    });
  }

  render() {
    const { posX, posY } = this.state;
    return (
      <div className="cursor" style={{ left: posX, top: posY }} />
    );
  }
}

export default Cursor;
