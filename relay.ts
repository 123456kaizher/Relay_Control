//% color="#AA278D" icon="\uf0e7" block="Relay Control"
namespace RelayControl {
    /**
     * Turns on a relay connected to a pin only when Button A is pressed.
     * @param relayPin the pin where the relay is connected
     */
    //% block="run relay on pin %relayPin with Button A"
    export function relayWithButtonA(relayPin: DigitalPin): void {
        basic.forever(function () {
            if (input.buttonIsPressed(Button.A)) {
                pins.digitalWritePin(relayPin, 1)
            } else {
                pins.digitalWritePin(relayPin, 0)
            }
        })
    }
}

