import { useState } from "react";
import { Form, Input, Button, Card, Typography } from "antd";

const { Title, Text } = Typography;

function App() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = () => {
    setSubmittedData({
      name,
      description,
    });
  };

  return (
    <div style={{ maxWidth: "600px", margin: "50px auto" }}>
      <Title>Форма пользователя</Title>

      <Form layout="vertical">
        <Form.Item label="Имя">
          <Input
            placeholder="Введите имя"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </Form.Item>

        <Form.Item label="Описание">
          <Input.TextArea
            placeholder="Введите описание"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            rows={4}
          />
        </Form.Item>

        <Button type="primary" onClick={handleSubmit}>
          Отправить
        </Button>
      </Form>

      {submittedData && (
        <Card title="Введенные данные" style={{ marginTop: "30px" }}>
          <p>
            <Text strong>Имя:</Text> {submittedData.name}
          </p>

          <p>
            <Text strong>Описание:</Text> {submittedData.description}
          </p>
        </Card>
      )}
    </div>
  );
}

export default App;
