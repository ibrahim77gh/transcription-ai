"use client";

import React, { useState } from "react";
import { InboxOutlined, CloseOutlined } from "@ant-design/icons";
import { message } from "antd";

function FileUpload({ onFileUpload }) {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    if (file) {
      onFileUpload(file); // Pass the uploaded file to the parent component
    }
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    message.success("file removed selected.");
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "20px", border: "2px dashed #ccc", padding: "20px", cursor: "pointer" }}>
      <input type="file" onChange={handleFileChange} style={{ display: "none" }} id="fileInput" />
      <label htmlFor="fileInput" style={{ width: "100%" }}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">Click or drag file to this area to upload</p>
        <p className="ant-upload-hint">Support for a single or bulk upload. Strictly prohibited from uploading company data or other banned files.</p>
      </label>
      {selectedFile && (
        <div style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
          <p style={{ marginRight: "10px", fontWeight: "bold" }}>Selected file: {selectedFile.name}</p>
          <button onClick={handleRemoveFile} style={{ border: "none", background: "none", cursor: "pointer" }}>
            <CloseOutlined style={{ color: "red" }} />
          </button>
        </div>
      )}
    </div>
  );
}

export default FileUpload;
