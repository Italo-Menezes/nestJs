import { Content } from './content';
import { Notification } from './notifications';

describe('Notification ', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      content: new Content('nova solicitação'),
      category: 'social',
      recipientId: 'exameple-recupient-id',
    });
    
    expect(notification).toBeTruthy();
  });
});
