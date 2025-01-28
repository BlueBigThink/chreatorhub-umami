export const notifyEvent = async (message: string): Promise<void> => {
  try {
    const hookUrl = 'https://discord.com/api/webhooks/1333783790056767508/TR-fomSVFfnC3f8CNTfKevfx6sKaXJpvF2CcE6Jael1Y6PcwIAB73L9jY5TfXLVehm6D'
    await fetch(hookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content: `>>> Umami: ${message}`,
      }),
    });
  } catch (error) {
    console.error('Error:', error);
  }
}