import React from 'react';
import styles from './CustomerForm.module.css';
import InputField from './InputField';
import SelectField from './SelectField';
import DatePicker from './DatePicker';
import Button from './Button';

const CustomerForm = () => {
  return (
    <main className={styles.customerForm}>
      <header className={styles.formHeader}>
        <h1 className={styles.formTitle}>Khách hàng / Thêm</h1>
        <div className={styles.actionButtons}>
          <Button variant="cancel">Hủy</Button>
          <Button variant="save">Lưu</Button>
        </div>
      </header>
      <form className={styles.formContent}>
        <section className={styles.formSection}>
          <InputField label="Họ & Tên *" name="fullName" required />
          <InputField label="Trạng thái" name="status" />
        </section>
        <section className={styles.formSection}>
          <DatePicker label="Ngày sinh" name="dateOfBirth" />
          <SelectField label="Giới tính" name="gender" />
          <InputField label="Số CMND/CCCD" name="idNumber" />
          <InputField label="Chức vụ" name="position" />
        </section>
        <section className={styles.formSection}>
          <InputField label="Tên KH doanh nghiệp" name="businessName" />
          <SelectField label="Nguồn KH *" name="customerSource" required />
          <InputField label="Ngành nghề" name="industry" />
        </section>
        <section className={styles.formSection}>
          <InputField label="Điện thoại *" name="phoneNumber" required />
          <InputField label="Thông tin thêm" name="additionalInfo" />
        </section>
        <section className={styles.formSection}>
          <InputField label="Hộp thư" name="email" type="email" />
          <InputField label="Website" name="website" type="url" />
        </section>
        <section className={styles.formSection}>
          <InputField label="Mạng xã hội" name="socialMedia" />
          <InputField label="Người phụ trách" name="inCharge" />
        </section>
        <section className={styles.addressSection}>
          <SelectField label="Địa chỉ" name="country" defaultValue="Việt Nam" />
          <SelectField label="Tỉnh / Thành phố" name="province" />
          <SelectField label="Quận / Huyện" name="district" />
          <SelectField label="Phường / Xã" name="ward" />
          <InputField label="Đường" name="street" />
        </section>
      </form>
    </main>
  );
};

export default CustomerForm;