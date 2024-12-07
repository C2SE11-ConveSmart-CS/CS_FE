const OrderPage = () => {
  return (
    <>
      <div
        className="w-[100%] flex justify-center gap-11"
        style={{ fontSize: '16px' }}
      >
        <div className="flex-1 flex flex-col gap-5 m-10">
          <div
            className="w-[100%] flex flex-col"
            style={{ border: '1px solid #ebedef', borderRadius: '5px' }}
          >
            <div
              className="h-[70px] flex w-[100%] items-center bg-[#f7f7f7]"
              style={{
                fontWeight: 'bold',
                border: '1px solid #ebedef',
                fontSize: '24px',
                paddingLeft: '20px',
              }}
            >
              Người Nhận
            </div>
            <div className="h-[100%] w-[100%] flex flex-col gap-1 px-[20px] ">
              <div className="flex flex-row h-[40px] justify-center  items-center pt-5">
                <div className="w-[300px]">Tùy chọn nơi nhận *</div>
                <div className="flex items-center gap-2 w-[100%]">
                  <input
                    type="radio"
                    id="address"
                    name="deliveryOption"
                    checked
                  />
                  <label htmlFor="address">Theo địa chỉ KH nhận</label>
                  <input type="radio" id="smartBox" name="deliveryOption" />
                  <label htmlFor="smartBox">Nhận tại tủ Smart Box</label>
                  <input type="radio" id="postOffice" name="deliveryOption" />
                  <label htmlFor="postOffice">Nhận tại bưu cục</label>
                </div>
              </div>
              <div className="flex flex-row h-[60px] justify-center  items-center ">
                <div className="w-[300px]">Điện thoại *</div>
                <div className="flex items-center gap-2 w-[100%]">
                  <input
                    type="text"
                    id="phone"
                    style={{
                      width: '100%',
                      border: '1px solid gray',
                      height: '40px',
                      borderRadius: '3px',
                    }}
                    placeholder="Nhập số điện thoại để tự điền thông tin người nhận"
                  />
                </div>
              </div>
              <div className="flex flex-row h-[60px] justify-center  items-center ">
                <div className="w-[300px]">Họ Tên *</div>
                <div className="flex items-center gap-2 w-[100%]">
                  <input
                    type="text"
                    id="phone"
                    style={{
                      width: '100%',
                      border: '1px solid gray',
                      height: '40px',
                      borderRadius: '3px',
                    }}
                    placeholder="Nhập họ tên"
                  />
                </div>
              </div>
              <div className="flex flex-row h-[160px]">
                <div className="w-[300px]">Địa chỉ *</div>
                <div className="flex items-center gap-2 w-[100%]">
                  <div className="flex flex-col gap-3 w-[100%]">
                    <input
                      type="text"
                      style={{
                        width: '100%',
                        border: '1px solid gray',
                        height: '40px',
                        borderRadius: '3px',
                      }}
                      placeholder="Nhập địa chỉ (số nhà/tên đường, phường/xã, quận/huyện, tỉnh/thành...)"
                    />
                    <div style={{ width: '100%' }} className="flex gap-3">
                      <select
                        style={{
                          flex: 1,
                          border: '1px solid gray',
                          height: '40px',
                          borderRadius: '3px',
                        }}
                      >
                        <option>Tỉnh/Thành Phố</option>
                        <option>Hà Nội</option>
                        <option>Hồ Chí Minh</option>
                      </select>
                      <select
                        style={{
                          flex: 1,
                          border: '1px solid gray',
                          height: '40px',
                          borderRadius: '3px',
                        }}
                      >
                        <option>Quận/Huyện</option>
                        <option>Liên Chiểu</option>
                        <option>Thanh Khê</option>
                      </select>
                    </div>
                    <div style={{ width: '100%' }} className="flex gap-3">
                      <select
                        style={{
                          flex: 1,
                          border: '1px solid gray',
                          height: '40px',
                          borderRadius: '3px',
                        }}
                      >
                        <option>Xã/Phường</option>
                        <option>Hoà Minh</option>
                        <option>Hoà Khánh Bắc</option>
                      </select>
                      <select
                        style={{
                          flex: 1,
                          border: '1px solid gray',
                          height: '40px',
                          borderRadius: '3px',
                        }}
                      >
                        <option>Thôn/Xóm</option>
                        <option>Xóm Bò</option>
                        <option>Xóm gà</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row h-[60px] justify-center items-center">
                <div className="w-[300px]">Thời gian hẹn giao *</div>
                <div className="flex items-center gap-2 w-[100%]">
                  <select
                    style={{
                      flex: 1,
                      border: '1px solid gray',
                      height: '40px',
                      borderRadius: '3px',
                    }}
                  >
                    <option>Cả ngày</option>
                    <option>Sáng</option>
                    <option>Chiều</option>
                    <option>Tối</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div
            className="w-[100%] flex flex-col"
            style={{ border: '1px solid #ebedef', borderRadius: '5px' }}
          >
            <div
              className="h-[70px] flex w-[100%] items-center bg-[#f7f7f7]"
              style={{
                fontWeight: 'bold',
                border: '1px solid #ebedef',
                fontSize: '24px',
                paddingLeft: '20px',
              }}
            >
              Chọn Dịch Vụ
            </div>
            <div className="h-[100%] w-[100%] flex flex-col gap-1 px-[20px]">
              <div className="flex flex-row h-[100px] justify-center items-center">
                <div className="w-[300px] font-bold">KHUYẾN MẠI *</div>
                <div className="flex items-center gap-2 w-[100%]">
                  <select
                    style={{
                      flex: 1,
                      border: '1px solid gray',
                      height: '40px',
                      borderRadius: '3px',
                    }}
                  >
                    <option>Cả ngày</option>
                    <option>Sáng</option>
                    <option>Chiều</option>
                    <option>Tối</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-5 m-10">
          <div
            className="w-[100%] flex flex-col h-[auto]"
            style={{ border: '1px solid #ebedef', borderRadius: '5px' }}
          >
            <div
              className="h-[65px] flex w-[100%] items-center bg-[#f7f7f7]"
              style={{
                fontWeight: 'bold',
                border: '1px solid #ebedef',
                fontSize: '24px',
                paddingLeft: '20px',
              }}
            >
              Thông Tin Hàng Hoá
            </div>
            <div className="pt-[10px] pl-[20px] pr-[20px]">
              <div
                className="flex h-[100px] justify-center flex-col gap-4"
                style={{ borderBottom: '1px solid #ebedef' }}
              >
                <div className="w-[300px] font-bold">LOẠI HÀNG HOÁ</div>
                <div className="flex items-center gap-2 w-[100%]">
                  <input
                    type="radio"
                    id="buu-kien"
                    name="loai-hang-hoa"
                    checked
                  />
                  <label htmlFor="buu-kien">Bưu kiện</label>
                  <input type="radio" id="tai-lieu" name="loai-hang-hoa" />
                  <label htmlFor="tai-lieu">Tài Liệu</label>
                </div>
              </div>
            </div>
            <div
              className="flex flex-row mx-[20px]"
              style={{ borderBottom: '1px solid #ebedef', paddingTop: '20px' }}
            >
              <div className="w-[300px]">Tên Hàng 1 *</div>
              <div
                className="flex items-center gap-2 w-[100%]"
                style={{ paddingBottom: '20px' }}
              >
                <div className="flex flex-col gap-3 w-[100%]">
                  <input
                    type="text"
                    style={{
                      width: '100%',
                      border: '1px solid gray',
                      height: '40px',
                      borderRadius: '3px',
                    }}
                    placeholder="Nhập tên hàng hoá"
                  />
                  <div style={{ width: '100%' }} className="flex gap-3">
                    <input
                      type="text"
                      style={{
                        width: '100%',
                        border: '1px solid gray',
                        height: '40px',
                        borderRadius: '3px',
                      }}
                      placeholder="Số lượng"
                    />
                    <input
                      type="text"
                      style={{
                        width: '100%',
                        border: '1px solid gray',
                        height: '40px',
                        borderRadius: '3px',
                      }}
                      placeholder="Trọng lượng"
                    />
                    <input
                      type="text"
                      style={{
                        width: '100%',
                        border: '1px solid gray',
                        height: '40px',
                        borderRadius: '3px',
                      }}
                      placeholder="Giá trị hàng"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="flex flex-row m-[20px] justify-center items-center "
              style={{
                borderBottom: '1px solid #ebedef',
                paddingBottom: '20px',
              }}
            >
              <div
                className="w-[200px] flex justify-center items-center h-[40px] text-[#ee1c4d]"
                style={{ border: '1px solid #ee1c4d', borderRadius: '5px' }}
              >
                Thêm hàng hoá
              </div>
            </div>
            <div className="flex flex-row h-[60px] justify-around  items-center p-[20px]">
              <div className="w-[300px]">Tổng khối lượng</div>
              <div className="flex justify-end items-center gap-2 w-[100%]">
                0 g
              </div>
            </div>
            <div
              className="flex flex-row h-[60px] justify-around  items-center mx-[20px]"
              style={{
                borderBottom: '1px solid #ebedef',
                paddingBottom: '20px',
              }}
            >
              <div className="w-[300px]">Tổng giá trị</div>
              <div className="flex justify-end items-center gap-2 w-[100%]">
                0 đ
              </div>
            </div>
            <div className=" flex flex-col gap-1 px-[20px]">
              <div
                className="flex h-[200px] justify-center flex-col gap-4 mt-4"
                style={{ borderBottom: '1px solid #ebedef' }}
              >
                <div className="w-[300px] font-bold">
                  TÍNH CHẤT HÀNG HOÁ ĐẶT BIỆT
                </div>
                <div className="flex items-center">
                  <div className="flex-1 flex items-center gap-2 w-[100%]">
                    <input
                      type="checkbox"
                      id="gia-tri-cao"
                      name="hang-dat-biet"
                      checked
                    />
                    <label htmlFor="gia-tri-cao">Giá trị cao</label>
                  </div>
                  <div className="flex-1 flex items-center gap-2 w-[100%]">
                    <input type="checkbox" id="de-vo" name="hang-dat-biet" />
                    <label htmlFor="de-vo">Hàng dễ vỡ</label>
                  </div>
                  <div className="flex-1 flex items-center gap-2 w-[100%]">
                    <input
                      type="checkbox"
                      id="nguyen-khoi"
                      name="hang-dat-biet"
                    />
                    <label htmlFor="nguyen-khoi">Nguyên Khối</label>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex-1 flex items-center gap-2 w-[100%]">
                    <input
                      type="checkbox"
                      id="gia-tri-cao"
                      name="hang-dat-biet"
                      checked
                    />
                    <label htmlFor="gia-tri-cao">Quá khổ</label>
                  </div>
                  <div className="flex-1 flex items-center gap-2 w-[100%]">
                    <input type="checkbox" id="de-vo" name="hang-dat-biet" />
                    <label htmlFor="de-vo">Chất lỏng</label>
                  </div>
                  <div className="flex-1 flex items-center gap-2 w-[100%]">
                    <input
                      type="checkbox"
                      id="nguyen-khoi"
                      name="hang-dat-biet"
                    />
                    <label htmlFor="nguyen-khoi">Từ tính, Pin</label>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex-1 flex items-center gap-2 w-[100%]">
                    <input
                      type="checkbox"
                      id="gia-tri-cao"
                      name="hang-dat-biet"
                      checked
                    />
                    <label htmlFor="gia-tri-cao">Hàng lạnh</label>
                  </div>
                  <div className="flex-1 flex items-center gap-2 w-[100%]"></div>
                  <div className="flex-1 flex items-center gap-2 w-[100%]"></div>
                </div>
              </div>
            </div>
            <div
              className="flex flex-row mx-[20px]"
              style={{ marginTop: '20px' }}
            >
              <div className="w-[300px]">Kích Thước</div>
              <div
                className="flex items-center gap-2 w-[100%]"
                style={{ paddingBottom: '20px' }}
              >
                <div className="flex flex-row gap-3 w-[100%]">
                  <input
                    type="text"
                    style={{
                      width: '100%',
                      border: '1px solid gray',
                      height: '40px',
                      borderRadius: '3px',
                    }}
                    placeholder="Dài (cm)"
                  />
                  <input
                    type="text"
                    style={{
                      width: '100%',
                      border: '1px solid gray',
                      height: '40px',
                      borderRadius: '3px',
                    }}
                    placeholder="Rộng (cm)"
                  />
                  <input
                    type="text"
                    style={{
                      width: '100%',
                      border: '1px solid gray',
                      height: '40px',
                      borderRadius: '3px',
                    }}
                    placeholder="Cao (cm)"
                  />
                </div>
              </div>
            </div>
            <div
              className="flex flex-row h-[60px] justify-center  items-center p-[20x]"
              style={{ padding: '10px 20px 20px 20px' }}
            >
              <div className="w-[300px]">Quy Đổi</div>
              <div className="flex items-center gap-2 w-[100%]">
                <input
                  type="text"
                  id="phone"
                  style={{
                    width: '100%',
                    border: '1px solid gray',
                    height: '40px',
                    borderRadius: '3px',
                  }}
                  placeholder="Khối lượng quy đổi từ kích thước hàng hoá"
                />
              </div>
            </div>
            <div
              className="flex flex-row h-[60px] justify-center  items-center p-[20x]"
              style={{ padding: '10px 20px 20px 20px' }}
            >
              <div className="w-[300px]">Mã đơn hàng</div>
              <div className="flex items-center gap-2 w-[100%]">
                <input
                  type="text"
                  id="phone"
                  style={{
                    width: '100%',
                    border: '1px solid gray',
                    height: '40px',
                    borderRadius: '3px',
                  }}
                  placeholder="Nhập mã đơn hàng tự chọn"
                />
              </div>
            </div>
          </div>
          <div
            className="w-[100%] flex flex-col h-[auto]"
            style={{ border: '1px solid #ebedef', borderRadius: '5px' }}
          >
            <div
              className="flex flex-row mx-[20px]"
              style={{ paddingTop: '20px' }}
            >
              <div
                className="flex items-center gap-2 w-[100%]"
                style={{ paddingBottom: '20px' }}
              >
                <div className="flex flex-col gap-3 w-[100%]">
                  <div className="w-[300px] font-bold">TIỀN THU HỘ</div>
                  <div className="flex items-center gap-2 w-[100%]">
                    <input
                      type="checkbox"
                      id="tien-thu-ho"
                      name="tien-thu-ho"
                      checked
                    />
                    Thu hộ bằng tiền hàng
                  </div>
                </div>
              </div>
              <div
                className="flex items-center gap-2 w-[100%]"
                style={{ paddingBottom: '20px' }}
              >
                <div className="flex flex-col gap-3 w-[100%]">
                  <div className="w-[300px] font-bold">NGƯỜI TRẢ CƯỚC</div>
                  <div className="flex items-center gap-2 w-[100%]">
                    <input
                      type="radio"
                      id="nguoi-gui"
                      name="nguoi-gui-nguoi-nhan"
                      checked
                    />
                    <label htmlFor="nguoi-gui">Người gửi</label>
                    <input
                      type="radio"
                      id="nguoi-nhan"
                      name="nguoi-gui-nguoi-nhan"
                    />
                    <label htmlFor="nguoi-nhan">Người nhận</label>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="flex flex-row h-[60px] justify-center  items-center p-[20x]"
              style={{ padding: '0px 20px 20px 20px' }}
            >
              <div className="flex items-center gap-2 w-[100%]">
                <input
                  type="text"
                  id="phone"
                  style={{
                    width: '40%',
                    border: '1px solid gray',
                    height: '40px',
                    borderRadius: '3px',
                  }}
                  placeholder="0 đ"
                />
              </div>
            </div>
            <div className="flex flex-row mx-[20px]">
              <div
                className="flex items-center gap-2 w-[100%]"
                style={{ paddingBottom: '20px' }}
              >
                <div className="flex flex-col gap-3 w-[100%]">
                  <div className="w-[300px] font-bold">GHI CHÚ</div>
                  <div className="flex items-center gap-2 w-[100%]">
                    <input
                      type="text"
                      id="phone"
                      style={{
                        width: '40%',
                        border: '1px solid gray',
                        height: '40px',
                        borderRadius: '3px',
                      }}
                      placeholder="Nhập ghi chú"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row mx-[20px]">
              <div
                className="flex items-center gap-2 w-[100%]"
                style={{ paddingBottom: '20px' }}
              >
                <div className="flex flex-col gap-3 w-[100%]">
                  <div className="flex items-center gap-2 w-[100%]">
                    <input
                      type="checkbox"
                      id="save-info"
                      name="save-info"
                      checked
                    />
                    Lưu thông tin đơn hàng
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-[100%] h-[100px] flex flex-row"
        style={{
          position: 'sticky',
          bottom: 5,
          right: 0,
          left: 0,
          border: '1px solid #ebedef',
          zIndex: 1000,
          backgroundColor: 'white',
        }}
      >
        <div style={{ flex: 1, border: '1px solid #ebedef', padding: '10px' }}>
          Tổng cước
        </div>
        <div style={{ flex: 1, border: '1px solid #ebedef', padding: '10px' }}>
          Tiền thu hộ
        </div>
        <div
          style={{ flex: 1, border: '1px solid #ebedef', padding: '10px' }}
        ></div>
        <div style={{ flex: 1, border: '1px solid #ebedef', padding: '10px' }}>
          Thời gian dự kiến
        </div>
        <div style={{ flex: 2, border: '1px solid #ebedef', padding: '10px' }}>
          <div className="flex-1 flex items-center gap-2 w-[100%]">
            <input type="checkbox" id="agree" name="agree" checked />
            <label htmlFor="agree">
              Tôi đã đọc và đồng ý với Điều khoản quy định
            </label>
          </div>
          <div className="flex flex-row gap-2 justify-between">
            <div
              className="w-[150px] flex justify-center items-center h-[40px] text-[#ee1c4d]"
              style={{ border: '1px solid #ee1c4d', borderRadius: '5px' }}
            >
              Gửi ngay
            </div>
            <div
              className="w-[150px] flex justify-center items-center h-[40px] bg-[#6c757d] text-[#ffffff]"
              style={{ border: '1px solid #6c757d', borderRadius: '5px' }}
            >
              Lưu nháp
            </div>
            <div
              className="w-[150px] flex justify-center items-center h-[40px] bg-[#6c757d] text-[#ffffff]"
              style={{ border: '1px solid #6c757d', borderRadius: '5px' }}
            >
              Làm mới
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OrderPage
