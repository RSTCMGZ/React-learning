import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample() {
  return (
    <Card className='text-center m-auto mt-4' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./img/2.jpg" />
      <Card.Body>
        <Card.Title>Ürün Adı</Card.Title>
        <Card.Text>
      Ürün Açıklaması
        </Card.Text>
        <Button className='mt-2' variant="primary">Satın al</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;