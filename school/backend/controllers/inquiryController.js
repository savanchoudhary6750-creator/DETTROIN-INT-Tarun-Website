// In-memory store for demo inquiries
const inquiries = [];

// Contact Us Form Submission Controller
export const createInquiry = (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    // Basic Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please provide required fields: Name, Email, and Message.',
      });
    }

    // Email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please enter a valid email address.',
      });
    }

    const newInquiry = {
      id: `INQ-${Date.now()}`,
      name: name.trim(),
      email: email.trim(),
      phone: phone ? phone.trim() : 'N/A',
      subject: subject || 'General Inquiry',
      message: message.trim(),
      submittedAt: new Date().toISOString(),
    };

    inquiries.push(newInquiry);
    console.log('📌 [SERVER LOG] New Contact Submission Received:', newInquiry);

    return res.status(200).json({
      success: true,
      message: 'Thank you for reaching out to Pavna School Aligarh! Your message has been received, and our admissions team will contact you within 24 hours.',
      inquiryId: newInquiry.id,
    });
  } catch (error) {
    console.error('❌ [SERVER ERROR] Error processing contact submission:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal server error. Please try again later or call our admissions hotline directly.',
    });
  }
};

// Get all inquiries Controller (For admin testing purposes)
export const getAllInquiries = (req, res) => {
  res.status(200).json({
    success: true,
    count: inquiries.length,
    data: inquiries,
  });
};
