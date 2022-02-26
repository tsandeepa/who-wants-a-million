import { createGlobalStyle } from 'styled-components';
// import bg1 from './../../../public/images/bg1.jpg';

const GlobalStyle = createGlobalStyle`

  body {
    margin: 0;
    padding: 0;
    background: #1E2633;
    /* font-family: Open-Sans, Helvetica, Sans-Serif; */
    font-family: 'Roboto', sans-serif;
    display: grid;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 10px;               /* width of the entire scrollbar */
    }
    &::-webkit-scrollbar-track {
      background: transparent;        /* color of the tracking area */
    }
    &::-webkit-scrollbar-thumb {
      background-color: #334054;    /* color of the scroll thumb */
      border-radius: 20px;       /* roundness of the scroll thumb */
    }
  }

  *{
    margin: 0;
  }



  .container{
    max-width: 1140px;
    margin: 0 auto;
  }

  .page-header{
    font-size: 30px;
    margin: 40px 0;
    color: #d1e2ff;
    font-weight: 300;
  }
  .form-gp-hz{
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
    label{
      font-size:16px;
      color:#ccc;
    }
    input{
      padding: 10px;
      border-radius: 2px;
      border: 1px solid #7a8ca7;
      background: #242c3a;
      color: #cbd6db;
      min-width: 400px;
      font-size: 16px;
    }
    button{
      padding: 13px 30px;
      border: none;
      color: #fff;
      border-radius: 2px;
      background: #2262D0;
      font-size: 15px;
      cursor: pointer;
    }
  }
  .nav-header{
    padding: 20px;
    border-bottom: 1px solid #334054;
    display: flex;
    justify-content: space-between;
    /* position: absolute;
    width: 100%; */
    box-sizing: border-box;

    h3{
      color:#fff;
    }
    .links{
      display:flex;
      gap: 20px;
      a{
        color: #96a4bb;
        text-decoration: none;
        font-size: 18px;
        font-weight: 400;
      }
    }
    
  }

  .sub-header{
    font-size: 16px;
    margin: 10px 0;
  }

  .container-home{
    max-width: 1022px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(158px,1fr));
    gap: 20px;
    margin-top: 30px;
    background: #181d26;
    padding: 20px;
    box-sizing: border-box;
    justify-content: center;
      .gp-li{
        position: relative;
        padding: 10px;
        background: #2d3540;
        border-radius: 2px;
        min-height: 140px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        a{
          text-decoration: none;
          color: #7a8ca7;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          gap: 20px;
          .g-letter{
            display: flex;
            justify-content: center;
          }
          h3{
            font-weight: 400;
            color: #d1d8e3;
          }
        }
      }
  }

  .gp-container{
  }

  .qz-container{
    display: flex;
    gap: 40px;
    gap: 40px;
    max-width: 1140px;
    margin: 0 auto;
    .qz-form{
      flex-basis: 50%;
      padding-right: 40px;
      .set-answer{
        display:flex;
        flex-direction: column;
        gap: 20px;
        >div{
          display: flex;
        }
      }
    }
    .qz-view{
      flex: 1 1 0%;
      /* height: 90vh; */
      overflow-y: auto;
      padding-right: 10px;

      &::-webkit-scrollbar {
        width: 10px;
      }
      &::-webkit-scrollbar-track {
        background: transparent; 
      }
      &::-webkit-scrollbar-thumb {
          background: #bbd1e5; 
      }
      &::-webkit-scrollbar-thumb:hover {
      } 
      .gp-title{
        font-size: 20px;
        text-align: left;
        color: #b0c1c7;
        padding: 10px;
        margin-bottom: 25px;
        margin-top: 15px;
        
      }
      .qo-opt{
          button{
            background: transparent;
            border: none;
            cursor: pointer;
            color: #ccc;
            font-size: 15px;
          }
      }
    }
    .q__edit{
      /* background-color: #fff !important; */
      .qo-opt{
        display: block;
      }
    }
    .qz-li {
      background-color: #3e4756;
      padding:20px;
      margin-bottom: 15px;
      border-radius: 2px;
      text-align: left;
      position: relative;
      &:hover{
        .qo-opt{
          display: block;
          
        }
      }
      .correct {
        background: #436258;
        border-radius: 2px;
        border: 1px solid #538d77;
      }
      .qo-opt{
        display: none;
        position: absolute;
        right: 0;
        top: 0;
        padding: 8px;
      }
      h3{
        font-size: 24px;
        margin-bottom: 20px;
        color: #dbdbdb;
        font-weight: 300;
        padding: 5px;
        padding-bottom: 20px;
        border-bottom: 1px solid #525f74;
        span{
          background: #1E2633;
          display: inline-flex;
          width: 35px;
          height: 35px;
          border-radius: 40px;
          justify-content: center;
          align-items: center;
        }
      }
      .qo-set{
        display: flex;
        flex-direction: column;
        p{
          color: #ccc;
          padding: 10px;
        }
      }
      
    }
  }

  .edit-opt{
    display: flex;
    gap: 20px;
  }
  .qzwz-bg{
    /* background-image: url(bg1); */
  }
  .qz-wizad{
    padding:50px;
    display: flex;
    flex-direction: column;
    /* background: radial-gradient(#e66465, #9198e5); */
    /* background: rgb(113,113,113);
    background: linear-gradient(0deg, rgba(113,113,113,0) 0%, rgba(20,2,31,1) 100%); */


    background: rgb(113,113,113);
    background: linear-gradient(0deg, rgba(113,113,113,0) 0%, rgba(0,0,0,0) 40%, rgba(0,0,0,1) 84%, rgba(20,2,31,1) 100%);
      
      .qw-title{
        color: #fff;
        font-size: 35px;
        margin:32px 0;
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .qw-options{
          flex: 1;
          display:flex;
          gap:40px;
          width: 900px;
          margin: 0 auto;
          padding: 20px 0;
          >div{
              flex: 1;
              cursor: pointer;
              p{
                padding:30px 20px;
                color: #fff;
                background: #49576e;
                margin-bottom: 30px;
                border-radius: 100px;
                &:hover{
                  /* background:#c7d5e2; */
                }
              }
          }
          .confirmed{
              background: #61a0e0;
          }
      }
  }
  .g-letter{
    span{
          color:#fff;
          padding: 10px;
          border-radius: 40px;
          width: 40px;
          height: 40px;
          display: flex;
          font-size: 28px;
          align-items: center;
          justify-content: center;
          text-transform: uppercase;
    }
  }
  

  .groups-c{
    max-width: 712px;
    margin: 0 auto;
    .grp-li{
      background-color: #2b333f;
      margin-bottom: 10px;
      border-radius: 2px;
      position: relative;
      &:hover .delete-btn{
        
            opacity: 1;
      }
      a{
        text-decoration:none;
        padding: 10px 15px;
        display:flex;
        gap: 30px;
        align-items: center;
        width: 90%;
        h3{
          color: #d9d9d9;
          font-weight: 300;
        }
        
      }
      .delete-btn{
        opacity: 0;
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        cursor: pointer;
        border: none;
        background: #ffffff05;
        width: 50px;
        font-size: 17px;
        color: #7c899f;
      }
    }
  }

  .form-th{
    display: flex;
    flex-direction: column;
    align-items: baseline;
    gap: 10px;
    margin-bottom: 30px;
    >div{
      display: flex;
      width: 100%;
      align-items: center;
      gap: 20px;
      input{
        width: auto;
      }
      label{
        cursor: pointer;
        span{
          background: #4268a9;
          color: #ccc;
          width: 25px;
          height: 25px;
          border-radius: 30px;
          display: inline-flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
    label{
      color: #ccc;
    }
    input{
      padding: 10px;
      border-radius: 2px;
      border: 1px solid #7a8ca7;
      background: #242c3a;
      color: #cbd6db;
      font-size: 16px;
      width: 100%;
    }
    textarea{
      padding: 10px;
      border-radius: 2px;
      border: 1px solid #7a8ca7;
      background: #242c3a;
      min-width: 300px;
      color: #cbd6db;
      font-size: 16px;
      width: 100% !important;
    }

  }

  .from-btn{
    padding: 18px 30px;
    border: none;
    color: #fff;
    border-radius: 2px;
    background: #2262D0;
    font-size: 15px;
    width: 100%;
    cursor: pointer;
  }
  .from-btn.bt-edit{
    display: none;
  }
  .from-btn.bt-cancel{
    display: none;

  }
  .editing{
    .from-btn.bt-edit{
      display: block;
      background-color: #c99c37;
    }
    .bt-add{
      display:none;
    }
    .bt-cancel{
      display: block;
    }
  }

  .control-panel{
    background-color: #334054;
    display: flex;
    justify-content: space-between;

  }

  .qzwz-bg{
    position: fixed;
    z-index: -1;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
 
export default GlobalStyle;