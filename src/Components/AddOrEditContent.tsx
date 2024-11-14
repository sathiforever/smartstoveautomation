import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import the styles
import { Container } from "../assect/styles/styleComponent";
// import { saveAs } from 'file-saver';
import axios from "axios";

const AddOrEditContent: React.FC = () => {
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    // Load content from server
    loadData()
  }, []);

  //load data
  const loadData = async () => {
    try {
      const response = await axios.get("/api/load");
      console.log("Data loaded:", response.data);
    } catch (error) {
      console.error("Error loading content:", error);
    }
  };
  const saveData = async () => {
    try {
      const response = await axios.post('/api/save', content);
      console.log('Data saved:', response.data);
    } catch (error) {
      console.error('Error saving content:', error);
    }
  };
  //   const saveContentAsHTMLFile = () => {
  //     const blob = new Blob([content], { type: 'text/html;charset=utf-8' });
  //     saveAs(blob, 'content.html');
  //   };

  return (
    <Container style={{ overflow: "scroll", height: "85%" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        <div style={{ width: "50%" }}>
          <span style={{ fontSize: "20px" }}>Edit Content</span>
        </div>
        <button style={{ height: "30px" }} onClick={saveData}>
          Save
        </button>
      </div>
      <ReactQuill
        style={{ height: "250px" }}
        value={content}
        onChange={setContent}
        theme="snow"
        modules={{
          toolbar: [
            [{ font: [] }, { size: [] }],
            ["bold", "italic", "underline", "strike"],
            ["clean"],
            ["link", "image", "video"],

            [{ color: [] }, { background: [] }],
            [{ script: "sub" }, { script: "super" }],
            [{ header: "1" }, { header: "2" }, "blockquote", "code-block"],
            [
              { list: "ordered" },
              { list: "bullet" },
              { indent: "-1" },
              { indent: "+1" },
            ],
            [{ table: "table" }],
          ],
        }}
      />
    </Container>
  );
};

export default AddOrEditContent;
