import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is XDR" text="XDR (extended detection and response) collects and automatically correlates data across multiple security layers – email, endpoint, server, cloud workload, and network. This allows for faster detection of threats and improved investigation and response times through security analysis." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      {/* <p>Explore the Library</p> */}
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Threats" text="Identify hidden, stealthy and sophisticated threats proactively and quickly." />
      <Feature title="Active Tracing" text="Track threats across any source or location within the organization" />
      <Feature title="Monitoring" text="Increase the productivity of the people operating the technology" />
    </div>
  </div>
);

export default WhatGPT3;