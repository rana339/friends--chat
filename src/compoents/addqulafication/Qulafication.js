// import { Form, Input, Button, Space } from 'antd';
// import {  PlusOutlined } from '@ant-design/icons';
// import './Qulafication.css'




// const Qulafication = () => {
//   const onFinish = values => {
//     const arr = values.users;
//     const map = arr.map((val) => {
//       console.log('map', val.first)
//     })

//     console.log('Received values of form:', values);
//     console.log('Received values of form:', values.users[0].first);
//   };

//   return (
//     <>
//     <h1>Qualification</h1>
//     <div className='qulafication'> 

      
//       <Form  name="dynamic_form_nest_item" onFinish={onFinish} autoComplete="off">
//         <Form.List name="users">
//           {(fields, { add, remove }) => (
//             <>
//               {fields.map(({ key, name, fieldKey, ...restField }) => (
//                 <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
//                   <Form.Item
//                     {...restField}
//                     name={[name, 'first']}
//                     fieldKey={[fieldKey, 'first']}
//                     rules={[{ required: true, message: 'Missing Qualification' }]}
//                   >
//                     <Input placeholder="qualification" />
//                   </Form.Item>
//                   <Form.Item
//                     {...restField}
//                     name={[name, 'last']}
//                     fieldKey={[fieldKey, 'last']}
//                     rules={[{ required: true, message: 'Missing Institute Name' }]}
//                   >
//                     <Input placeholder="Institute Name" />
//                   </Form.Item>
//                   <button onClick={() => remove(name)}>delete</button>
//                   {/* <MinusCircleOutlined  /> */}
//                 </Space>
//               ))}
//               <Form.Item>
//                 <Button className='addfield-qulafication' type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
//                   Add field
//                 </Button>
//               </Form.Item>
//             </>
//           )}
//         </Form.List>
//         <Form.Item>
//           <Button type="primary" htmlType="submit">
//             Save Qualification
//           </Button>
//         </Form.Item>
//       </Form>
//     </div>
//     </>
//   );
// };
// export default Qulafication;


// import React, { useState } from 'react';
// import { Button, Modal, Form, Input, Radio } from 'antd';

// interface Values {
//   title: string;
//   description: string;
//   modifier: string;
// }

// interface CollectionCreateFormProps {
//   visible: boolean;
//   onCreate: (values: Values) => void;
//   onCancel: () => void;
// }

// const CollectionCreateForm: React.FC<CollectionCreateFormProps> = ({
//   visible,
//   onCreate,
//   onCancel,
// }) => {
//   const [form] = Form.useForm();
//   return (
//     <Modal
//       visible={visible}
//       title="Create a new collection"
//       okText="Create"
//       cancelText="Cancel"
//       onCancel={onCancel}
//       onOk={() => {
//         form
//           .validateFields()
//           .then(values => {
//             form.resetFields();
//             onCreate(values);
//           })
//           .catch(info => {
//             console.log('Validate Failed:', info);
//           });
//       }}
//     >
//       <Form
//         form={form}
//         layout="vertical"
//         name="form_in_modal"
//         initialValues={{ modifier: 'public' }}
//       >
//         <Form.Item
//           name="title"
//           label="Title"
//           rules={[{ required: true, message: 'Please input the title of collection!' }]}
//         >
//           <Input />
//         </Form.Item>
//         <Form.Item name="description" label="Description">
//           <Input type="textarea" />
//         </Form.Item>
//         <Form.Item name="modifier" className="collection-create-form_last-form-item">
//           <Radio.Group>
//             <Radio value="public">Public</Radio>
//             <Radio value="private">Private</Radio>
//           </Radio.Group>
//         </Form.Item>
//       </Form>
//     </Modal>
//   );
// };

// const Qulafication = () => {
//   const [visible, setVisible] = useState(false);

//   const onCreate = (values: any) => {
//     console.log('Received values of form: ', values);
//     setVisible(false);
//   };

//   return (
//     <div>
//       <Button
//         type="primary"
//         onClick={() => {
//           setVisible(true);
//         }}
//       >
//         New Collection
//       </Button>
//       <CollectionCreateForm
//         visible={visible}
//         onCreate={onCreate}
//         onCancel={() => {
//           setVisible(false);
//         }}
//       />
//     </div>
//   );
// };

// export default Qulafication;