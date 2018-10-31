class CreateVideos < ActiveRecord::Migration[5.2]
  def change
    create_table :videos do |t|

      	t.string :url
      	t.string :name
      	t.integer :user_id

      t.timestamps
    end
  end
end
