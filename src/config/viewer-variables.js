const BoundingBoxes = [
  {
    id: 0,
    name: "Sense teulada",
    pos: [-0.093, 0.127, 9.381],
    rot: [0.0, 0.0, 0.436],
    siz: [14.783, 11.831, 6.224],
    clip_inside: false,
  },
  {
    id: 1,
    name: "Entrada",
    pos: [1.146, 6.95, 4.856],
    rot: [0.0, 0.0, 0.392],
    siz: [8.916, 6.148, 5.576],
    clip_inside: true,
  },
  {
    id: 2,
    name: "Nau principal",
    pos: [1.543, 0.541, 6.074],
    rot: [0.0, 0.0, 0.444],
    siz: [10.459, 6.232, 6.331],
    clip_inside: true,
  },
  {
    id: 3,
    name: "Nau lateral",
    pos: [3.196, -3.397, 5.33],
    rot: [0.0, 0.0, 0.459],
    siz: [10.431, 3.694, 4.034],
    clip_inside: true,
  },
  {
    id: 4,
    name: "Absis",
    pos: [-4.879, -2.617, 6.254],
    rot: [0.0, 0.0, 0.449],
    siz: [4.479, 4.315, 4.885],
    clip_inside: true,
  },
  {
    id: 5,
    name: "Absidiola nord",
    pos: [-2.167, -6.106, 6.124],
    rot: [0.0, 0.0, 0.426],
    siz: [2.426, 2.327, 3.372],
    clip_inside: true,
  },
  {
    id: 6,
    name: "Absidiola sud",
    pos: [-5.803, 1.739, 4.914],
    rot: [0.009, -0.022, 0.533],
    siz: [2.382, 2.29, 3.895],
    clip_inside: true,
  },
  {
    id: 7,
    name: "Avantsala",
    pos: [-3.621, 3.165, 6.286],
    rot: [0.0, 0.0, 0.531],
    siz: [3.009, 2.695, 6.542],
    clip_inside: true,
  },
];

const Cameras = {
  defaultCam: {
    pos: [-17.112, 11.073, 10.078],
    target: [-2.27, 2.393, 3.923],
  },
  0: {
    pos: [11.924, 5.126, 17.341],
    target: [-0.207, -0.343, 3.366],
  },
};

const CleanUpBoundingBoxes = [
  {
    id: 0,
    name: "CleanUp0",
    pos: [1.113, -0.084, -5.627],
    rot: [-0.21, -0.065, 0.335],
    siz: [28.387, 29.265, 16.79],
    clip_inside: false,
  },
  {
    id: 1,
    name: "CleanUp1",
    pos: [-2.911, 9.158, 1.0],
    rot: [0.0, 0.0, 0.433],
    siz: [23.693, 2.191, 2.081],
    clip_inside: false,
  },
];

export default BoundingBoxes;
export { Cameras };
export { CleanUpBoundingBoxes };
