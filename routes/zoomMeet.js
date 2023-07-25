const express = require("express");
const router = express.Router();
const { handleZoomCallback, createZoomMeeting } = require("../controller/zoomMeet.controller");

// Route to handle the Zoom callback
router.get("/callback", async (req, res) => {
  try {
    const authorizationCode = req.query.code; // The authorization code received from Zoom

    // Handle the Zoom callback and get the access token
    const accessToken = await handleZoomCallback(authorizationCode);

    // Now that you have the accessToken, you can proceed to create a Zoom meeting and get the meeting link.
    const meetingLink = await createZoomMeeting(accessToken);

    // Return the Zoom meeting link to the frontend
    res.json({ meetingLink });
  } catch (error) {
    console.error("Error handling Zoom callback:", error);
    res.status(500).json({ error: "Something went wrong during Zoom callback" });
  }
});

module.exports = router;
