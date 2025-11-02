export default function App() {
  return (
    <div
      style={{
        padding: '2rem',
        color: 'white',
        textAlign: 'center',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(180deg, #0f1724 0%, #081223 60%)',
      }}
    >
      <h1
        style={{
          fontSize: '3rem',
          marginBottom: '1rem',
          background: 'linear-gradient(90deg, #FF7A59, #FFCB57)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
        }}
      >
        JSONPDFConverter
      </h1>
      <p style={{ fontSize: '1.3rem', color: '#b6c3d4', maxWidth: '600px' }}>
        All tools loading in-browser — JSON formatter, image compressor, PDF utilities, Base64, and more.
      </p>
      <p style={{ marginTop: '2rem', fontSize: '1rem', color: '#888' }}>
        Build successful! Replace this with your real UI.
      </p>
    </div>
  );
}
