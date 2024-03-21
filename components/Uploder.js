'use client';
import React, { useState } from "react";
import { InboxOutlined, CloseOutlined } from "@ant-design/icons";
import { message } from "antd";
function FileUpload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    if (file) {
      message.success(`${file.name} selected.`);
    }
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    message.success('file removed selected.');
  };

  const handleUpload = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);

      // Example: Sending the file to a server using fetch
      fetch("https://example.com/upload", {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          // Handle response from server
          console.log("Server response:", response);
        })
        .catch((error) => {
          console.error("Error uploading file:", error);
        });
    } else {
      console.log("No file selected");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "20px",
        border: "2px dashed #ccc", // Add border
        padding: "20px",
        cursor: "pointer", // Change cursor on hover
      }}
    >
      {/* Hidden file input */}
      <input
        type="file"
        onChange={handleFileChange}
        style={{ display: "none" }} // Hide the input visually
        id="fileInput" // Associate input with label
      />
      {/* Label for the input */}
      <label htmlFor="fileInput" style={{ width: "100%" }}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">
          Click or drag file to this area to upload
        </p>
        <p className="ant-upload-hint">
          Support for a single or bulk upload. Strictly prohibited from
          uploading company data or other banned files.
        </p>
      </label>
      {/* Display selected file name */}
      {selectedFile && (
        <div
          style={{ display: "flex", alignItems: "center", marginTop: "10px" }}
        >
          <p style={{ marginRight: "10px", fontWeight: "bold" }}>
            Selected file: {selectedFile.name}
          </p>
          <button
            onClick={handleRemoveFile}
            style={{ border: "none", background: "none", cursor: "pointer" }}
          >
            <CloseOutlined style={{ color: "red" }} />
          </button>
        </div>
      )}
    </div>
  );
}

export default FileUpload;