docker-compose up -d
call npx supabase start 
start /MIN npx supabase functions serve 
echo click on any key to stop the backend
pause 
call npx supabase stop
docker-compose down