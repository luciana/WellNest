import React, {useEffect, useState, useRef} from 'react'
import * as firebase from 'firebase/app'
import 'firebase/firestore'
import "../assets/styles/main.scss"

const Index = () => {

	const cameraBtnRef = useRef(null)
	const hangupBtnRef = useRef(null)
	const createBtnRef = useRef(null)
	const joinBtnRef = useRef(null)
	const confirmJoinBtnRef = useRef(null)
	const roomDialogRef = useRef(null)
	const currentRoomRef = useRef(null)
	const localVideoRef = useRef(null)
	const remoteVideoRef = useRef(null)
	const roomIdRef = useRef(null)

	const firebaseConfig = {
		projectId: "fir-rtctest-47e19",
	}

	firebase.initializeApp(firebaseConfig)

	useEffect(() => {
		cameraBtnRef.current.addEventListener('click', openUserMedia)
		hangupBtnRef.current.addEventListener('click', hangUp)
		createBtnRef.current.addEventListener('click', createRoom)
		joinBtnRef.current.addEventListener('click', joinRoom)

		return (() => {
			cameraBtnRef.current.removeEventListener('click', openUserMedia)
			hangupBtnRef.current.removeEventListener('click', hangUp)
			createBtnRef.current.removeEventListener('click', createRoom)
			joinBtnRef.current.removeEventListener('click', joinRoom)	
		})
	}, [])


	// DEfault configuration - Change these if you have a different STUN or TURN server.
	const configuration = {
	  iceServers: [
		{
		  urls: [
			'stun:stun1.l.google.com:19302',
			'stun:stun2.l.google.com:19302',
		  ],
		},
	  ],
	  iceCandidatePoolSize: 10,
	};
	
	let peerConnection = null;
	let localStream = null;
	let remoteStream = null;
	let roomDialog = null;
	let roomId = null;

	
	async function createRoom() {
	  createBtnRef.current.disabled = true;
	  joinBtnRef.current.disabled = true;
	  const db = firebase.firestore();
	
	  console.log('Create PeerConnection with configuration: ', configuration);
	  peerConnection = new RTCPeerConnection(configuration);
	
	  registerPeerConnectionListeners();
	
	  // Add code for creating a room here
	  
	  // Code for creating room above
	  
	  localStream.getTracks().forEach(track => {
		peerConnection.addTrack(track, localStream);
	  });
	
	  // Code for creating a room below
	
	  // Code for creating a room above
	
	  // Code for collecting ICE candidates below
	
	  // Code for collecting ICE candidates above
	
	  peerConnection.addEventListener('track', event => {
		console.log('Got remote track:', event.streams[0]);
		event.streams[0].getTracks().forEach(track => {
		  console.log('Add a track to the remoteStream:', track);
		  remoteStream.addTrack(track);
		});
	  });
	
	  // Listening for remote session description below
	
	  // Listening for remote session description above
	
	  // Listen for remote ICE candidates below
	
	  // Listen for remote ICE candidates above
	}
	
	function joinRoom() {
	  createBtnRef.current.disabled = true;
	  joinBtnRef.current.disabled = true;
	
	  confirmJoinBtnRef.current.
		  addEventListener('click', async () => {
			roomId = roomIdRef.current.value;
			console.log('Join room: ', roomId);
			currentRoomRef.current.innerText = `Current room is ${roomId} - You are the callee!`;
			await joinRoomById(roomId);
		  }, {once: true});
	  roomDialog.open();
	}
	
	async function joinRoomById(roomId) {
	  const db = firebase.firestore();
	  const roomRef = db.collection('rooms').doc(`${roomId}`);
	  const roomSnapshot = await roomRef.get();
	  console.log('Got room:', roomSnapshot.exists);
	
	  if (roomSnapshot.exists) {
		console.log('Create PeerConnection with configuration: ', configuration);
		peerConnection = new RTCPeerConnection(configuration);
		registerPeerConnectionListeners();
		localStream.getTracks().forEach(track => {
		  peerConnection.addTrack(track, localStream);
		});
	
		// Code for collecting ICE candidates below
	
		// Code for collecting ICE candidates above
	
		peerConnection.addEventListener('track', event => {
		  console.log('Got remote track:', event.streams[0]);
		  event.streams[0].getTracks().forEach(track => {
			console.log('Add a track to the remoteStream:', track);
			remoteStream.addTrack(track);
		  });
		});
	
		// Code for creating SDP answer below
	
		// Code for creating SDP answer above
	
		// Listening for remote ICE candidates below
	
		// Listening for remote ICE candidates above
	  }
	}
	
	async function openUserMedia(e) {
	  const stream = await navigator.mediaDevices.getUserMedia(
		  {video: true, audio: true});
	  localVideoRef.current.srcObject = stream;
	  localStream = stream;
	  remoteStream = new MediaStream();
	  remoteVideoRef.current.srcObject = remoteStream;
	
	  console.log('Stream:', localVideoRef.current.srcObject);
	  cameraBtnRef.current.disabled = true;
	  joinBtnRef.current.disabled = false;
	  createBtnRef.current.disabled = false;
	  hangupBtnRef.current.disabled = false;
	}
	
	async function hangUp(e) {
	  const tracks = localVideoRef.current.srcObject.getTracks();
	  tracks.forEach(track => {
		track.stop();
	  });
	
	  if (remoteStream) {
		remoteStream.getTracks().forEach(track => track.stop());
	  }
	
	  if (peerConnection) {
		peerConnection.close();
	  }
	
	  localVideoRef.current.srcObject = null;
	  remoteVideoRef.current.srcObject = null;
	  cameraBtnRef.current.disabled = false;
	  joinBtnRef.current.disabled = true;
	  createBtnRef.current.disabled = true;
	  hangupBtnRef.current.disabled = true;
	  currentRoomRef.current.innerText = '';
	
	  // Delete room on hangup
	  if (roomId) {
		const db = firebase.firestore();
		const roomRef = db.collection('rooms').doc(roomId);
		const calleeCandidates = await roomRef.collection('calleeCandidates').get();
		calleeCandidates.forEach(async candidate => {
		  await candidate.delete();
		});
		const callerCandidates = await roomRef.collection('callerCandidates').get();
		callerCandidates.forEach(async candidate => {
		  await candidate.delete();
		});
		await roomRef.delete();
	  }
	
	  document.location.reload(true);
	}
	
	function registerPeerConnectionListeners() {
	  peerConnection.addEventListener('icegatheringstatechange', () => {
		console.log(
			`ICE gathering state changed: ${peerConnection.iceGatheringState}`);
	  });
	
	  peerConnection.addEventListener('connectionstatechange', () => {
		console.log(`Connection state change: ${peerConnection.connectionState}`);
	  });
	
	  peerConnection.addEventListener('signalingstatechange', () => {
		console.log(`Signaling state change: ${peerConnection.signalingState}`);
	  });
	
	  peerConnection.addEventListener('iceconnectionstatechange ', () => {
		console.log(
			`ICE connection state change: ${peerConnection.iceConnectionState}`);
	  });
	}
	
	return (
	<>
		<img width="200" height="200" src="https://trello-attachments.s3.amazonaws.com/5e87c383d894372e52ba5afe/5e87c3d86a3b2139e947481e/a361c1181f429f92e2d36d0f9807e26f/wellnest1.png" />
		<div id="buttons">
			<button class="mdc-button mdc-button--raised" ref={cameraBtnRef}>
				<i class="material-icons mdc-button__icon" aria-hidden="true">perm_camera_mic</i>
				<span class="mdc-button__label">Open camera & microphone</span>
			</button>
			<button class="mdc-button mdc-button--raised" disabled ref={createBtnRef}>
				<i class="material-icons mdc-button__icon" aria-hidden="true">group_add</i>
				<span class="mdc-button__label">Create room</span>
			</button>
			<button class="mdc-button mdc-button--raised" disabled ref={joinBtnRef}>
				<i class="material-icons mdc-button__icon" aria-hidden="true">group</i>
				<span class="mdc-button__label">Join room</span>
			</button>
			<button class="mdc-button mdc-button--raised" disabled ref={hangupBtnRef}>
				<i class="material-icons mdc-button__icon" aria-hidden="true">close</i>
				<span class="mdc-button__label">Hangup</span>
			</button>
		</div>
		<div>
			<span ref={currentRoomRef}></span>
		</div>
		<div id="videos">
			<video ref={localVideoRef} muted autoplay playsinline></video>
			<video ref={remoteVideoRef} autoplay playsinline></video>
		</div>
		<div class="mdc-dialog"
			ref={roomDialogRef}
			role="alertdialog"
			aria-modal="true"
			aria-labelledby="my-dialog-title"
			aria-describedby="my-dialog-content">
			<div class="mdc-dialog__container">
				<div class="mdc-dialog__surface">
					<h2 class="mdc-dialog__title" id="my-dialog-title">Join room</h2>
					<div class="mdc-dialog__content" id="my-dialog-content">
						Enter ID for room to join:
						<div class="mdc-text-field">
							<input type="text" ref={roomIdRef} class="mdc-text-field__input" />
							<label class="mdc-floating-label" for="my-text-field">Room ID</label>
							<div class="mdc-line-ripple"></div>
						</div>
					</div>
					<footer class="mdc-dialog__actions">
						<button type="button" class="mdc-button mdc-dialog__button" data-mdc-dialog-action="no">
							<span class="mdc-button__label">Cancel</span>
						</button>
						<button ref={confirmJoinBtnRef} type="button" class="mdc-button mdc-dialog__button"
								data-mdc-dialog-action="yes">
							<span class="mdc-button__label">Join</span>
						</button>
					</footer>
				</div>
			</div>
			<div class="mdc-dialog__scrim"></div>
		</div>
	</>
)
}

export default Index
