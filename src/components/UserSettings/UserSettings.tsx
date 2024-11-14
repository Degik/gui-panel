import React from 'react';
import styles from './UserSettings.module.css';
import InputField from './InputField';
import SelectField from './SelectField';

interface UserSettingsProps {
    // Define props here
}

// THIS AREA NEEDS API TO BE COMPLETED
const UserSettings: React.FC = () => {
  return (
    <main className={styles.container}>
      <div className={styles.twoColumnLayout}>
        <section className={styles.leftColumn}>
          <h2 className={styles.sectionTitle}>Personal Information</h2>
          <InputField label="First Name" value="John" />
          <h2 className={styles.sectionTitle}>Account Details</h2>
          <InputField label="Email address" value="john@example.com" type="email" />
          <h2 className={styles.sectionTitle}>Display Settings</h2>
          <SelectField
            label="Font Size"
            value="Normal"
            options={['Small', 'Normal', 'Large']}
          />
          <h3 className={styles.sectionTitle}>Any other needed setting</h3>
        </section>
        
        <section className={styles.rightColumn}>
          <div className={styles.profileImageContainer}>
            <div className={styles.profileImageWrapper}>
              <div className={styles.profileImageColumn}>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/6d0197ec486b634b4c8ceeec11ecbdd1270cd0533011e8b295f077157bb6ad52?placeholderIfAbsent=true&apiKey=346cd8710f5247b5a829262d8409a130"
                  alt="User profile"
                  className={styles.profileImage}
                />
                <InputField label="Last Name" value="Doe" />
              </div>
              <div className={styles.pronounsColumn}>
                <div className={styles.pronounsWrapper}>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/4c441cffac2b26684ffaa81ef8113bd3a9d435f86ed1535d3e891144c9da1d34?placeholderIfAbsent=true&apiKey=346cd8710f5247b5a829262d8409a130"
                    alt=""
                    className={styles.pronounsIcon}
                  />
                  <InputField label="Pronouns" value="Sir/Mr" />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.accountActions}>
            <button>Change email</button>
            <button>Change password</button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default UserSettings;