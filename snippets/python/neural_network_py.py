from numpy import *
# Config
inputs = [[0, 0, 1], [1, 1, 1], [1, 0, 1], [0, 1, 1], [0, 0, 1], [1, 1, 1], [1, 0, 1], [0, 1, 1], [0, 0, 1], [1, 1, 1], [1, 0, 1], [0, 1, 1], [0, 0, 1], [1, 1, 1], [1, 0, 1], [0, 1, 1], [0, 0, 1], [1, 1, 1], [1, 0, 1], [0, 1, 1], [0, 0, 1], [1, 1, 1], [1, 0, 1], [0, 1, 1]]
outputs = [[0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0]]
iterations = 10
output_iteration_results = True # slows down the learning a lot

# Source
training_set_inputs = array(inputs)
training_set_outputs_nont = array(outputs)
training_set_outputs = training_set_outputs_nont.T

random.seed(1) # Good practice
synaptic_weights = (1) * random.random((3, 1)) - 1

for iteration in range(iterations):
    output = 1 / (1 + exp(-(dot(training_set_inputs, synaptic_weights))))
    synaptic_weights += dot(training_set_inputs.T, (training_set_outputs - output) * output * (1 - output))
    if output_iteration_results:
        print(output)

print(" #----# OUTPUT: ")
print((1 / (1 + exp(-(dot(array([1, 0, 0]), synaptic_weights))))))
print(" #----# END_OUTPUT; ")
