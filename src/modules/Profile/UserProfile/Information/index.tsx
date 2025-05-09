import { Button, Col, DatePicker, Form, Input, Select } from 'antd';
import { countryList } from './countryList';
import AppRowContainer from '@/app/components/AppRowContainer';
import IntlMessages from '@/app/helpers/IntlMessages';
import { StyledUserProfileForm, StyledUserProfileFormTitle, StyledUserProfileGroupBtn } from '../index.styled';

const Information = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const { Option } = Select;
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const { TextArea } = Input;

  return (
    <StyledUserProfileForm initialValues={{ remember: true }} onFinish={onFinish} onFinishFailed={onFinishFailed}>
      <StyledUserProfileFormTitle>
        <IntlMessages id="userProfile.information" />
      </StyledUserProfileFormTitle>
      <AppRowContainer gutter={16}>
        <Col xs={24} md={24}>
          <Form.Item name="bio" rules={[{ required: true, message: 'Please input your Bio Data' }]}>
            <TextArea rows={4} placeholder="Your Bio data here..." />
          </Form.Item>
        </Col>
        <Col xs={24} md={12}>
          <Form.Item name="birthdate" rules={[{ required: true, message: 'Please input Date!' }]}>
            <DatePicker style={{ width: '100%' }} format="DD M YYYY" />
          </Form.Item>
        </Col>
        <Col xs={24} md={12}>
          <Form.Item name="country" rules={[{ required: true, message: 'Please input Your Country!' }]}>
            <Select
              showSearch
              style={{ width: '100%' }}
              placeholder="Select a country"
              optionFilterProp="children"
              filterOption={(input: string, option: any) => option.children.toLowerCase().includes(input.toLowerCase())}
            >
              {countryList.map((country, index) => {
                return (
                  <Option key={index} value={country.name}>
                    {country.name}
                  </Option>
                );
              })}
            </Select>
          </Form.Item>
        </Col>

        <Col xs={24} md={12}>
          <Form.Item name="website" rules={[{ required: true, message: 'Please input your Website!' }]}>
            <Input placeholder="Website" />
          </Form.Item>
        </Col>
        <Col xs={24} md={12}>
          <Form.Item name="phone" rules={[{ required: true, message: 'Please input your Phone number!' }]}>
            <Input placeholder="Phone Number" />
          </Form.Item>
        </Col>
        <Col xs={24} md={24}>
          <StyledUserProfileGroupBtn shouldUpdate className="user-profile-group-btn">
            <Button type="primary" htmlType="submit">
              Save Changes
            </Button>
            <Button htmlType="button">Cancel</Button>
          </StyledUserProfileGroupBtn>
        </Col>
      </AppRowContainer>
    </StyledUserProfileForm>
  );
};

export default Information;
