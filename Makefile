ifndef u
u:=ubuntu
endif

deploy:
	rsync -avhzL --delete \
				--no-perms --no-owner --no-group \
				--exclude .git \
				--exclude .env \
				--exclude dist \
				--exclude node_modules \
				--exclude workers \
				--filter=":- .gitignore" \
				. $(u)@$(h):$(dir)/
	ssh $(u)@$(h) "cd $(dir); yarn"
	ssh $(u)@$(h) "pm2 restart user"

deploy-dev:
	make deploy h=54.86.219.17 dir=/var/www/vispx_dev/vispx-landing-page
