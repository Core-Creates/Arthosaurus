import speech_recognition as sr
#import keyboard
#import pyautogui


#beginning of script
print("Starting Script")

def speechtotext():
    recognizer = sr.Recognizer()

    with sr.Microphone() as source:
        print("Listening...")
        audio = recognizer.listen(source)

    try:
        text = recognizer.recognizegoogle(audio) #convert speech to text
        print("Text: ", text)
        return text

    except:
        print("ERROR: Could not discern audio.")

def text_to_action(recognized_text):        # perform a specific function based on words said
    if "test" or "check" in recognized_text:
        print("This is a test.")

    elif "hello" or "hi" in recognized_text:
        print("Hello or Hi.")

    else:
        print("Could not understand.")



if __name__ == "__main__":

    #print("Press 'V' to activate voice recognition script.")
    #keyboard.wait('v' or 'V') # waits for user to press v to activate script

    while True:
        recognized_text = speechtotext()

        if recognized_text:
            print("You said: ", recognized_text)
            text_to_action(recognized_text)
        else:
            print("Error: no action performed")
            break

print ("End of Script")