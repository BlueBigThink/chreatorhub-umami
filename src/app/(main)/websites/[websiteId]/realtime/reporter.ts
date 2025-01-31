import axios from 'axios';

export const notifyEvent = async (message: string): Promise<void> => {
  try {
    await axios.post(
      'https://discord.com/api/webhooks/1333783790056767508/TR-fomSVFfnC3f8CNTfKevfx6sKaXJpvF2CcE6Jael1Y6PcwIAB73L9jY5TfXLVehm6D',
      {
        content: `>>> Umami: ${message}`,
      },
    );
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error sending Discord notification:', error);
  }
};
