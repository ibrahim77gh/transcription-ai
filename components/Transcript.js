"use client";
import React, { useState, useEffect } from 'react';
// import { BookLoader } from "react-awesome-loaders";
import Spinner from './Spinner';
import { AudioRecorder } from 'react-audio-voice-recorder';
import AudioPlayer from './customAudioPlayer'; // Import your custom audio player component

import 'react-h5-audio-player/lib/styles.css';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
const { TextArea } = Input;

import { UploadOutlined, AlertOutlined } from '@ant-design/icons';
import { Button, message, Upload,Input  } from 'antd';

import { Breadcrumb, Layout, Menu, theme } from 'antd';
import AntCard from './AntCard';
import FileUpload from './Uploder';
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  // getItem('Option 1', '1', <PieChartOutlined />),
  // getItem('Option 2', '2', <DesktopOutlined />),
  // getItem('User', 'sub1', <UserOutlined />, [
  //   getItem('Tom', '3'),
  //   getItem('Bill', '4'),
  //   getItem('Alex', '5'),
  // ]),
  // getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  // getItem('Files', '9', <FileOutlined />),
];
const addAudioElement = (blob) => {
  const url = URL.createObjectURL(blob);
  const audio = document.createElement("audio");
  audio.src = url;
  audio.controls = true;
  document.body.appendChild(audio);
};
const props = {
  name: 'file',
  action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    console.log(info)
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};


const Transcript = () => {
  const [loading, setLoading] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [audioFile, setAudioFile] = useState(null);
  const [transcribedText, setTranscribedText] = useState('');

  const handleFileUpload = (file) => {
    setLoading(true); // Set loading state to true when file upload begins
    setAudioFile(file);
    message.success(`${file.name} file uploaded successfully`);
    
    // Sending the audio file to the server
    const formData = new FormData();
    formData.append('audio', file);

    fetch('http://127.0.0.1:8000/transcription/', {
      method: 'POST',
      body: formData,
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to upload file to the server.');
        }
      })
      .then(data => {
        setTranscribedText(data.text);
        setLoading(false); // Set loading state to false after receiving the response
      })
      .catch(error => {
        console.error('Error uploading file:', error);
        setLoading(false); // Set loading state to false if there's an error
      });
  };

  const handleRemoveFile = () => {
    setAudioFile(null);
    setTranscribedText('');
  };
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const [transcriptions, setTranscriptions] = useState([]);

  useEffect(() => {
    // Fetch transcriptions from the API
    axios.get('http://localhost:8000/transcription/')
      .then(response => {
        setTranscriptions(response.data);
      })
      .catch(error => {
        console.error('Error fetching transcriptions:', error);
      });
  }, []);

  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider 
        collapsible 
        collapsed={collapsed} 
        onCollapse={setCollapsed}
        width={300} // Adjust the width as per your requirement
        style={{ overflow: 'auto', height: '100vh' }}
      >
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          {transcriptions.map((transcription, index) => (
            <div key={index} className="border-b p-4">
              <p className="font-urdu text-lg">{transcription.text}</p>
            </div>
          ))}
        </Menu>
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>{user?.first_name} {user?.last_name}</Breadcrumb.Item>
          </Breadcrumb>



          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '1200px',
            height: '500px',
            marginTop: '80px'

          }}>
                      <span style={{ textAlign: 'center' }}>
              <FileUpload onFileUpload={handleFileUpload} />
            </span>
            {loading ? ( // Show spinner if loading state is true
              <Spinner />
            ) : (
              <>
                {audioFile && (
                  <span style={{ textAlign: 'center', marginTop: '25px', width: '500px' }}>
                    <AudioPlayer audioFile={audioFile} />
                  </span>
                )}
                {transcribedText && (
                  <TextArea className= "font-urdu text-lg"
                    value={transcribedText}
                    autoSize={{ minRows: 3, maxRows: 6 }}
                    style={{ marginTop: '25px', width: '500px',  }}
                    readOnly
                  />
                )}
              </>
            )}
            {/* <span>{loading ? <Spinner/> : <AntCard />}</span> */}

            {/* <span><Button icon={<AlertOutlined />}
              style={{ textAlign: 'right', marginTop: "45px" }} onClick={() => setLoading(!loading)}> Generate Transcript</Button></span>
            <span>

            </span> */}
          </div>

          {/* <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            Bill is a cat.
          </div> */}
          {/* <iframe width={'100%'} height={'100%'} src="https://two-trees-jump.loca.lt " title="W3Schools Free Online Web Tutorials"></iframe>  */}
        </Content>
        {/* <Upload {...props}>
    <Button icon={<UploadOutlined />}>Click to Upload</Button>
  </Upload> */}
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
        </Footer>
      </Layout>
    </Layout>
  );
};
export default Transcript;