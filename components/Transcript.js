"use client";
import React, { useState } from 'react';
import { BookLoader } from "react-awesome-loaders";
import ReactDOM from "react-dom/client";
import { AudioRecorder } from 'react-audio-voice-recorder';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

import { UploadOutlined,AlertOutlined  } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';

import { Breadcrumb, Layout, Menu, theme } from 'antd';
import AntCard from './AntCard';
import Uploader from './Uploder';
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
  const [loading,setLoading]= useState(false)
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
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
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          
          
      
          <div style={{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '1200px',
    height: '500px',
    marginTop:'80px'

    }}>
      <span style={{  textAlign: 'center'}}>
      <Uploader/>
    </span>
      <span style={{  textAlign: 'center',marginTop:'25px',width:'500px'}}><AudioPlayer
    autoPlay
    src="https://cdn.pixabay.com/audio/2022/08/04/audio_2dde668d05.mp3"
    onPlay={e => console.log("onPlay")}
    // other props here
  /></span>
  <span style={{  display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',border: '1px solid black', backgroundColor: 'white', padding: '10px', textAlign: 'center', marginTop: '25px', width: '500px' }}>
  <div>
    Start recording
    </div>
    <div style={{  textAlign: 'center'}}>
    <AudioRecorder 
      onRecordingComplete={addAudioElement}
      audioTrackConstraints={{
        noiseSuppression: true,
        echoCancellation: true,
      }} 
      downloadOnSavePress={true}
      downloadFileExtension="webm"
      showVisualizer={true}
    />
     </div>
</span>

     <span>{loading ?  <BookLoader
        background={"linear-gradient(135deg, #6066FA, #4645F6)"}
        desktopSize={"60px"}
        mobileSize={"40px"}
        textColor={"#4645F6"}
      /> : <AntCard/>}</span>
    <span><Button icon={<AlertOutlined />}  
    style={{  textAlign: 'right',marginTop:"45px"}} onClick={()=> setLoading(!loading)}> Generate Transcript</Button></span>
    <span>
    
    </span>
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
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default Transcript;