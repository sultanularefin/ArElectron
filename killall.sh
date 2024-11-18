tell application "System Events"
    repeat with p in (every process whose name is "System Preferences")
        try
            click button "Cancel" of every window of p
        end try
    end repeat
end tell