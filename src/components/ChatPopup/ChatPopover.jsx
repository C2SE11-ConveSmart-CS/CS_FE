import React from 'react'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import './ChatPopover.css'

function ChatPopover() {
  return (
    <OverlayTrigger
      trigger="click"
      placement="top"
      overlay={
        <Popover className="chat-popover">
          <Popover.Header as="h3">SimpleChat</Popover.Header>
          <Popover.Body>
            <section className="msger">
              <main className="msger-chat">
                <div className="msg left-msg">
                  <div
                    className="msg-img"
                    style={{
                      backgroundImage:
                        'url(https://image.flaticon.com/icons/svg/327/327779.svg)',
                    }}
                  />
                  <div className="msg-bubble">
                    <div className="msg-info">
                      <div className="msg-info-name">BOT</div>
                      <div className="msg-info-time">12:45</div>
                    </div>
                    <div className="msg-text">
                      Hi, welcome to SimpleChat! Go ahead and send me a message.
                      😄
                    </div>
                  </div>
                </div>
                <div className="msg right-msg">
                  <div
                    className="msg-img"
                    style={{
                      backgroundImage:
                        'url(https://image.flaticon.com/icons/svg/145/145867.svg)',
                    }}
                  />
                  <div className="msg-bubble">
                    <div className="msg-info">
                      <div className="msg-info-name">Sajad</div>
                      <div className="msg-info-time">12:46</div>
                    </div>
                    <div className="msg-text">
                      You can change your name in JS section!
                    </div>
                  </div>
                </div>
              </main>
              <form className="msger-inputarea">
                <input
                  type="text"
                  className="msger-input"
                  placeholder="Enter your message..."
                />
                <button type="submit" className="msger-send-btn">
                  Send
                </button>
              </form>
            </section>
          </Popover.Body>
        </Popover>
      }
    >
      <div className="btn-chat">
        <img
          src="https://dashboard.codeparrot.ai/api/assets/Z0vkprLVBCaRbmVg"
          alt="Positive"
          className="icon"
        />
      </div>
    </OverlayTrigger>
  )
}

export default ChatPopover
