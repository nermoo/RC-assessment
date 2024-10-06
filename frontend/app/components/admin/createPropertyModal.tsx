import React from 'react';
import { Modal, Form, Input, Button, Select, Switch, InputNumber, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { Location, PropertyStatus, PropertyType } from '@/constants/Enums';
import { useCreatePropertyMutation } from '@/lib/features/properties/propertyApi';


interface AddPropertyModalProps {
    isModalOpen: boolean;
    handleOk: () => void;
    handleCancel: () => void;
  }

  const { TextArea } = Input;
const { Option } = Select;

const CreatePropertyModal: React.FC<AddPropertyModalProps> = ({isModalOpen, handleOk, handleCancel}) => {
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Property added successfully',
    });
  };

  const error = () => {
    messageApi.open({
      type: 'error',
      content: 'Failed to add property. Please try again',
    });
  };

  const [createProperty, { isLoading }] = useCreatePropertyMutation();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onFinish = async (values: any) => {
    try {
      const formData = new FormData();
      formData.append('title', values.title);
      formData.append('description', values.description);
      formData.append('price', values.price);
      formData.append('area', values.area);
      formData.append('propertyType', values.type);
      formData.append('status', values.status);
      formData.append('location', values.location);
      formData.append('slug', values.slug);
      if (values.propertyImg && values.propertyImg.file) {
        formData.append('propertyImg', values.propertyImg.file.originFileObj);
      }
      await createProperty(formData).unwrap();
      success();
      handleOk();
    } catch (err) {
      error();
      console.error(err);
    }
    form.resetFields();
  };

  return (
    <>
    {contextHolder}
      <Modal
      title="Add Property"
      open={isModalOpen}
      onCancel={handleCancel}
      footer={null}
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        className="space-y-4"
      >

        <Form.Item
          label="Property Title"
          name="title"
          rules={[{ required: true, message: 'Please enter the property title' }]}
        >
          <Input placeholder="Enter property title" />
        </Form.Item>

        <Form.Item
          label="Property Description"
          name="description"
          rules={[{ required: true, message: 'Please enter the property description' }]}
        >
          <TextArea rows={4} placeholder="Enter property description" />
        </Form.Item>


        <div className="flex gap-4">
        <Form.Item
            label="Property Price (LKR)"
            name="price"
            rules={[{ required: true, message: 'Please enter the property price' }]}
            className="flex-1"
        >
            <InputNumber
            prefix="LKR"
            className="!w-full"
            placeholder="Enter price"
            min={0}
            />
        </Form.Item>

        <Form.Item
            label="Property Area (sq ft)"
            name="area"
            rules={[{ required: true, message: 'Please enter the property area in sq ft' }]}
            className="flex-1"
        >
            <InputNumber
            className="!w-full"
            placeholder="Enter area in sq ft"
            min={0}
            />
        </Form.Item>
        </div>

        <div className="flex gap-4">
        <Form.Item
            label="Property Type"
            name="type"
            rules={[{ required: true, message: 'Please select a property type' }]}
            className="flex-1"
        >
            <Select placeholder="Select property type">
            <Option value={PropertyType.SINGLE_FAMILY}>Single Family</Option>
            <Option value={PropertyType.VILLA}>Villa</Option>
            </Select>
        </Form.Item>

        <Form.Item
            label="Property Status"
            name="status"
            rules={[{ required: true, message: 'Please select a property status' }]}
            className="flex-1"
        >
            <Select placeholder="Select property status">
            <Option value={PropertyStatus.FOR_SALE}>For Sale</Option>
            <Option value={PropertyStatus.FOR_RENT}>For Rent</Option>
            </Select>
        </Form.Item>
        </div>

        <div className="flex gap-4">
        <Form.Item
            label="Property Location"
            name="location"
            rules={[{ required: true, message: 'Please select a location' }]}
            className="flex-1"
        >
            <Select placeholder="Select location">
            <Option value={Location.COLOMBO}>Colombo</Option>
            <Option value={Location.KANDY}>Kandy</Option>
            <Option value={Location.GALLE}>Galle</Option>
            </Select>
        </Form.Item>
        <Form.Item
            label="Single Lock-Up Garage"
            name="slug"
            valuePropName="checked"
            rules={[{ required: true }]}
            className="flex-1"
        >
            <Switch checkedChildren="Yes" unCheckedChildren="No" />
        </Form.Item>
        </div>

        <Form.Item
          label="Property Image"
          name="propertyImg"
          valuePropName="file"
          rules={[{ required: true, message: 'Please upload an image' }]}
        >
          <Upload name="image" listType="picture" maxCount={1}>
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>
        </Form.Item>

        <Form.Item>
          <Button loading={isLoading} type="primary" htmlType="submit" className="w-full">
            Add Property
          </Button>
        </Form.Item>
      </Form>
    </Modal>
    </>
  );
};

export default CreatePropertyModal;