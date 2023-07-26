const zoomCallback = async (req, res) => {
    try {
      const clientId = "YOUR_CLIENT_ID"; // Replace with your Zoom API Key
      const clientSecret = "YOUR_CLIENT_SECRET"; // Replace with your Zoom API Secret
      const redirectUri = "http://localhost:3000/zoom/callback"; // Replace with your backend's callback URL
      const authorizationCode = req.query.code; // The authorization code received from Zoom
  
      // Exchange the authorization code for an access token
      const tokenResponse = await axios.post(
        "https://zoom.us/oauth/token",
        {
          code: authorizationCode,
          client_id: clientId,
          client_secret: clientSecret,
          redirect_uri: redirectUri,
          grant_type: "authorization_code",
        }
      );
  
      const accessToken = tokenResponse.data.access_token;
      // Now you have the accessToken, which can be used to make authorized API calls to Zoom on behalf of the user.
      // You can proceed to create a Zoom meeting and get the meeting link.
      res.json({ accessToken });
    } catch (error) {
      console.error("Error during Zoom callback:", error);
      res.status(500).json({ error: "Something went wrong" });
    }
  };
  
  module.exports = zoomCallback;