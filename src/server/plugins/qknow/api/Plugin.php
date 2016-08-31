<?php namespace Qknow\Api;

use Backend;
use System\Classes\PluginBase;

/**
 * Api Plugin Information File
 */
class Plugin extends PluginBase
{

    /**
     * Returns information about this plugin.
     *
     * @return array
     */
    public function pluginDetails()
    {
        return [
            'name'        => 'Api',
            'description' => 'No description provided yet...',
            'author'      => 'Qknow',
            'icon'        => 'icon-leaf'
        ];
    }

    /**
     * Register method, called when the plugin is first registered.
     *
     * @return void
     */
    public function register()
    {

    }

    /**
     * Boot method, called right before the request route.
     *
     * @return array
     */
    public function boot()
    {
        $this->app['Illuminate\Contracts\Http\Kernel']
            ->pushMiddleware('Qknow\Api\Middleware\BeforeAnyDbQueryMiddleware');

    }

    /**
     * Registers any front-end components implemented in this plugin.
     *
     * @return array
     */
    public function registerComponents()
    {
        return []; // Remove this line to activate

        return [
            'Qknow\Api\Components\MyComponent' => 'myComponent',
        ];
    }

    /**
     * Registers any back-end permissions used by this plugin.
     *
     * @return array
     */
    public function registerPermissions()
    {
        return []; // Remove this line to activate

        return [
            'qknow.api.some_permission' => [
                'tab' => 'Api',
                'label' => 'Some permission'
            ],
        ];
    }

    /**
     * Registers back-end navigation items for this plugin.
     *
     * @return array
     */
    public function registerNavigation()
    {
        return []; // Remove this line to activate

        return [
            'api' => [
                'label'       => 'Api',
                'url'         => Backend::url('qknow/api/mycontroller'),
                'icon'        => 'icon-leaf',
                'permissions' => ['qknow.api.*'],
                'order'       => 500,
            ],
        ];
    }

}
